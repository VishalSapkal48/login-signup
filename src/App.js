import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/LoginComponents/Login';
import Register from '../src/LoginComponents/Register';
import Dashboard from '../src/LoginComponents/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
