// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Homeafterlogin from './pages/Homeafterlogin';
import EditProfil from './pages/EditProfil';
import Dashboard from './pages/Dashboard';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<LoginPage />} />

        <Route 
          path="/Homeafterlogin" 
          element={
            <PrivateRoute>
              <Homeafterlogin />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/editprofil"
          element={
            <PrivateRoute>
              <EditProfil />
            </PrivateRoute>
          }
        />
        <Route 
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Redirect semua route yang tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
