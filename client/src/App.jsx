import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Test from './pages/Test';
const App = () => {
  return (
    <div>
      <Router>
         <Routes>
         <Route path='*' element={<HomePage />} />
         <Route path='/login' element={<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/test' element={<Test />} />
         </Routes>
         
      </Router>
    </div>
  )
}

export default App
