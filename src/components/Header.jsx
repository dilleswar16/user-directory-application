import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    useTheme
  } from '@mui/material';
  
  const Header = () => {
    const theme = useTheme();
   
  
    return (
      <AppBar position="static" sx={{ mb: 4, bgcolor: 'white', boxShadow: theme.shadows[2] }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
              User Directory
            </Typography>
          
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;