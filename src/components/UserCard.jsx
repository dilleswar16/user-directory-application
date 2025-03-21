import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Chip,
  IconButton,
  useTheme,
  alpha,
  Tooltip
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import getRoleColor from './utils/roleColors';

const UserCard = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'visible',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[8],
          '& .quick-view-button': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      }}
      onClick={() =>  navigate(`/users/${user.id}`)}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <Avatar
          src={user.image}
          sx={{
            width: 80,
            height: 80,
            border: `4px solid ${theme.palette.background.paper}`,
            boxShadow: theme.shadows[3],
          }}
        />
      </Box>

      <CardMedia
        sx={{
          height: 100,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        }}
      />

      <CardContent sx={{ pt: 5, pb: 2, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
        
        <Chip
          label={user.role}
          color={getRoleColor(user.role)}
          size="small"
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
          <Tooltip title="Email">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary" noWrap>
                {user.email}
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Company">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <BusinessIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary" noWrap>
                {user.company.name}
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Location">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary" noWrap>
                {user.address.city}, {user.address.state}
              </Typography>
            </Box>
          </Tooltip>
        </Box>
      </CardContent>

      <IconButton
        className="quick-view-button"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          opacity: 0,
          transform: 'translateY(-10px)',
          transition: 'all 0.3s ease-in-out',
          bgcolor: 'background.paper',
          boxShadow: theme.shadows[2],
          '&:hover': {
            bgcolor: 'background.paper',
          }
        }}
      >
        <PersonIcon color="primary" />
      </IconButton>
    </Card>
  );
};

export default UserCard;