import { Box, ToggleButtonGroup, ToggleButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useViewContext } from '../context/ViewContext';

const ViewControls = ({ users }) => {
  const { viewMode, setViewMode, roleFilter, setRoleFilter } = useViewContext();

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  const handleRoleFilter = (event) => {
    setRoleFilter(event.target.value);
  };

  return (
    <Box 
      sx={{ 
        mb: 3,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewChange}
          aria-label="view mode"
          size="small"
        >
          <ToggleButton value="card" aria-label="card view">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="table" aria-label="table view">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Role Filter</InputLabel>
          <Select
            value={roleFilter}
            label="Role Filter"
            onChange={handleRoleFilter}
          >
            <MenuItem value="all">All Roles</MenuItem>
            {[...new Set(users.map(user => user.role))].map(role => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ViewControls;