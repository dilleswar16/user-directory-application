import { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import Header from "../components/Header";
import ViewControls from "../components/ViewControls";
import UserProfile from "../components/UserProfile";
import { useViewContext } from "../context/ViewContext";
import userService from "../services/UserService";

const UserCard = lazy(() => import("../components/UserCard"));
const UserTable = lazy(() => import("../components/UserTable"));


const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" p={4}>
    <CircularProgress />
  </Box>
);

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { viewMode, roleFilter } = useViewContext();
  const [filteredUsers, setFilteredUsers] = useState([]);

  //   const fetchUsers = async () => {
  //     try {
  //       setLoading(true);
  //       let data;
  //       if (roleFilter === 'all') {
  //         data = await userService.getAllUsers();
  //       } else {
  //         data = await userService.getUsersByRole(roleFilter);
  //       }
  //       setUsers(data);
  //       setFilteredUsers(data);
  //     } catch (error) {
  //       console.error("Failed to load users", error);
  //       setError("Failed to load users");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, [roleFilter]);

  // 1st useEffect - Fetch all users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        
        setLoading(true);
        const data = await userService.getAllUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Failed to load users", error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (roleFilter === "all") {
      setFilteredUsers(users);
    } else {
      const fetchFilteredUsers = async () => {
        try {
          setLoading(true);
          const data = await userService.getUsersByRole(roleFilter);
          setFilteredUsers(data);
        } catch (error) {
          console.error("Failed to load users", error);
          setError("Failed to filter users");
        } finally {
          setLoading(false);
        }
      };
      fetchFilteredUsers();
    }
    setLoading(false);
  }, [roleFilter]);

  // const handleProfileOpen = (user) => {
  //   setSelectedUser(user);
  //   setProfileOpen(true);
  // };

  // const handleProfileClose = () => {
  //   setProfileOpen(false);
  // };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <ViewControls users={users} />

        <Suspense fallback={<LoadingFallback />}>
          {viewMode === "card" ? (
            <Box
              display="grid"
              gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              gap={3}
            >
              {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </Box>
          ) : (
            <UserTable users={filteredUsers} />
          )}
        </Suspense>
      </Container>

      {/* <UserProfile
        user={selectedUser}
        open={profileOpen}
        onClose={handleProfileClose}
      /> */}
    </>
  );
};

export default UserDirectory;
