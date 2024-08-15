import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/Profile';
import Dashboard from './pages/admin/Dashboard';
import { useSelector } from 'react-redux';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to='/login' />} />
          <Route path='/dashboard' element={isAuthenticated && user?.role === 'admin' ? <Dashboard /> : <Navigate to='/' />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/products' element={<ProductDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
