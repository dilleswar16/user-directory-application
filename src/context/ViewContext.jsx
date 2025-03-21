import { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useViewContext must be used within a ViewProvider');
  }
  return context;
};

export const ViewProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('card');
  const [roleFilter, setRoleFilter] = useState('all');

  const value = {
    viewMode,
    setViewMode,
    roleFilter,
    setRoleFilter
  };

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
};