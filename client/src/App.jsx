import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Router>
         <Routes>
         <Route path='*' element={<HomePage />} />
         <Route path='/login' element={<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/profile' element={<Profile />} />
         </Routes>
         
      </Router>
    </div>
  )
}

export default App
