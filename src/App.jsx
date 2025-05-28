import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        {/* Halaman Home */}
        <Route path="/" element={<Home />} />

        {/* Halaman Login */}
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} 
        />

        {/* Halaman Dashboard (hanya untuk user yang login) */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
        />

        {/* Default route (jika path tidak ditemukan) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
