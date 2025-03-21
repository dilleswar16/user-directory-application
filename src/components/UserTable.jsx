import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Chip,
  useTheme,
  alpha,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import getRoleColor from "./utils/roleColors";

const UserTable = ({ users }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: theme.shadows[2],
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              sx={{
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  transform: "scale(1.002)",
                },
              }}
            >
              <TableCell>
                <Avatar
                  src={user.image}
                  sx={{
                    width: 40,
                    height: 40,
                    border: `2px solid ${theme.palette.background.paper}`,
                    boxShadow: theme.shadows[2],
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {user.firstName} {user.lastName}
                </Typography>
              </TableCell>
              <TableCell>
                <Tooltip title="Click to view profile">
                  <Typography>{user.email}</Typography>
                </Tooltip>
              </TableCell>
              <TableCell>{user.company.name}</TableCell>
              <TableCell>
                <Chip
                  label={user.role}
                  color={getRoleColor(user.role)}
                  size="small"
                  sx={{
                    fontWeight: 500,
                    "& .MuiChip-label": {
                      px: 2,
                    },
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
