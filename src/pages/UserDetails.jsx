import { Suspense, lazy, use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotFound from "../components/NotFound";
import UserService from "../services/UserService";
import getRoleColor from "../components/utils/roleColors";

const PersonalInfo = lazy(() => import("../components/userInfo/PersonalInfo"));
const EducationInfo = lazy(() => import("../components/userInfo/EducationInfo"));
const SystemInfo = lazy(() => import("../components/userInfo/SystemInfo"));
const LocationInfo = lazy(() => import("../components/userInfo/LocationInfo"));
const CompanyInfo = lazy(() => import("../components/userInfo/CompanyInfo"));
const BankingInfo = lazy(() => import("../components/userInfo/BankingInfo"));
const SecurityInfo = lazy(() => import("../components/userInfo/SecurityInfo"));
const CryptoInfo = lazy(() => import("../components/userInfo/CryptoInfo"));


const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" p={4}>
    <CircularProgress />
  </Box>
);

const UserDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserService.getUserById(id); // Fetch user details
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

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

  if (error || !user) {
    return <NotFound />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 3 }}
      >
        Back to Directory
      </Button>

      <Box sx={{ position: "relative", mb: 9 }}>
        <Paper
          sx={{
            height: 200,
            bgcolor: "primary.main",
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "primary.main",
              opacity: 0.8,
              backgroundImage:
                "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
            }}
          />
        </Paper>
        <Box
          sx={{
            position: "absolute",
            bottom: -50,
            left: 50,
            display: "flex",
            alignItems: "flex-end",
            gap: 3,
          }}
        >
          <Avatar
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            sx={{
              width: 150,
              height: 150,
              border: "5px solid white",
              boxShadow: 3,
            }}
          />
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            >
              {user.firstName} {user.lastName}
              <Typography
                component="span"
                variant="h6"
                sx={{ ml: 2, color: "rgba(255,255,255,0.8)" }}
              >
                ({user.maidenName == "" ? "NA" : user.maidenName})
              </Typography>
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <Chip
                label={user.role}
                color={getRoleColor(user.role)}
                size="small"
              />
              <Chip
                label={user.company.title}
                size="small"
                sx={{ bgcolor: "wheat" }}
              />
              <Chip
                label={user.company.department}
                size="small"
                sx={{ bgcolor: "wheat" }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
          <Suspense fallback={<LoadingFallback />}>
            <PersonalInfo user={user} />

            <EducationInfo user={user} />

            <SystemInfo user={user} />
            </Suspense>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
          <Suspense fallback={<LoadingFallback />}>
            <LocationInfo user={user} />

            <CompanyInfo user={user} />

            <BankingInfo user={user} />

            <SecurityInfo user={user} />

            <CryptoInfo user={user} />
            </Suspense>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
