import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewProvider } from './context/ViewContext';
import UserDirectory from './pages/UserDirectory';
import UserDetails from './pages/UserDetails';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <ViewProvider>
        <Routes>
          <Route path="/" element={<UserDirectory />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </ViewProvider>
    </BrowserRouter>
    </>
  )
}

export default App
