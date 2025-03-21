import { useState, useEffect, Suspense, lazy } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import Header from "../components/Header";
import ViewControls from "../components/ViewControls";
import { useViewContext } from "../context/ViewContext";
import userService from "../services/UserService";
import UserCard from "../components/UserCard";
import UserTable from "../components/UserTable";


const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { viewMode, roleFilter } = useViewContext();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        
        const allUsers = await userService.getAllUsers();
        setUsers(allUsers); // Store all users (for roles)

        // Fetch filtered users from backend
        if (roleFilter === "all") {
          setFilteredUsers(allUsers);
        } else {
          const filteredUsers = await userService.getUsersByRole(roleFilter);
          setFilteredUsers(filteredUsers);
        }
      } catch (error) {
        console.error("Failed to load users", error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [roleFilter]); 

  // const handleProfileOpen = (user) => {
  //   setSelectedUser(user);
  //   setProfileOpen(true);
  // };

  // const handleProfileClose = () => {
  //   setProfileOpen(false);
  // };

  return (
    <>
      <Header />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh" // Reduced height so it doesn't push Header
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <Typography color="error">{error}</Typography>
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ pb: 4 }}>
          <ViewControls users={users} />

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
          
        </Container>
      )}

      {/* <UserProfile
        user={selectedUser}
        open={profileOpen}
        onClose={handleProfileClose}
      /> */}
    </>
  );
};

export default UserDirectory;
