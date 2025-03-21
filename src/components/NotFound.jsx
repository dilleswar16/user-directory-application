import { Box, Button, Typography, useTheme, alpha } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        width: '100%',
        background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2
      }}
    >
     
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '25vw',
          height: '25vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 600 }}>
        {/* 404 Image */}
        <Box
          component="img"
          src="https://illustrations.popsy.co/white/falling.svg"
          alt="404 Illustration"
          sx={{
            width: '100%',
            maxWidth: 400,
            height: 'auto',
            mb: 4,
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': {
                transform: 'translateY(0)',
              },
              '50%': {
                transform: 'translateY(-20px)',
              },
            },
          }}
        />

        <Typography 
          variant="h1" 
          color="primary" 
          sx={{ 
            fontSize: { xs: '80px', sm: '120px' },
            mb: 2,
            textShadow: `2px 2px 4px ${alpha(theme.palette.primary.main, 0.2)}`,
            fontWeight: 'bold'
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          gutterBottom 
          color="primary"
          sx={{ 
            fontWeight: 'medium',
            fontSize: { xs: '24px', sm: '34px' }
          }}
        >
          User Not Found
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 4,
            maxWidth: 400,
            mx: 'auto',
            fontSize: { xs: '16px', sm: '18px' }
          }}
        >
          Oops! The user you're looking for seems to have vanished into thin air. 
          Let's get you back to where the users actually exist!
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          onClick={() => navigate('/')}
          sx={{ 
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
            boxShadow: theme.shadows[4],
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[8],
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Return to Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;