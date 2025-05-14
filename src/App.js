import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './LoginComponents/Login';
import Register from './LoginComponents/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav >
          <Link to="/login">Login</Link>
          <Link to="/register" >Register</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
