import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Avatar,
    Chip,
    Grid,
    Paper,
    IconButton,
    Button,
    useTheme
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import BusinessIcon from '@mui/icons-material/Business';
  import WorkIcon from '@mui/icons-material/Work';
  import { useNavigate } from 'react-router-dom';
import getRoleColor from './utils/roleColors';
  
  const UserProfile = ({ user, open }) => {
    const theme = useTheme();
    const navigate = useNavigate();
  
    if (!user) return null;
  
    return (
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            bgcolor: 'background.paper',
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: theme.palette.primary.main,
          color: 'white',
          px: 3,
          py: 2
        }}>
          <Typography variant="h6">User Profile</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Avatar
                src={user.image}
                sx={{ width: 120, height: 120, mr: 3 }}
              />
              <Box>
                <Typography variant="h4">{user.firstName} {user.lastName}</Typography>
                <Chip
                  label={user.role}
                  color={getRoleColor(user.role)}
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>
  
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>Personal Information</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.phone}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.address.city}, {user.address.state}</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>Company Details</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <BusinessIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.company.name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.company.title}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{user.company.address.city}, {user.company.address.state}</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
  
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  onClose();
                  navigate(`/users/${user.id}`);
                }}
              >
                View Full Profile
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default UserProfile;