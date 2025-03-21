export const getRoleColor = (role) => {
    if (!role) return 'default';
  
    switch (role.toLowerCase()) {
      case 'admin':
        return 'error';  
      case 'moderator':
        return 'warning'; 
      default:
        return 'success'; 
    }
  };

  export default getRoleColor;
  