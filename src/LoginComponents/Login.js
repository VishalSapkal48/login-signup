import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import '../Css/Login.css'; 
=======
import '../Css/Login.css';

>>>>>>> 84d6471 (Your commit message)
function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/login', form, {
        withCredentials: true,
      });
      setMsg(res.data);

      if (res.data === "Login Successful!") {
  navigate('/dashboard'); 
}

    } catch (err) {
      setMsg("Login failed.");
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className='loginform'>
        <h3>Login</h3>
        <label>Email:</label>
        <input name="email" type="email" onChange={handleChange} required className='frominput' />

        <label>Password:</label>
        <input name="password" type="password" onChange={handleChange} required className='frominput' />

        <button type="submit" className='loginsubmit'>Login</button>
        <p>{msg}</p>
 
        <button type="button" onClick={handleRegisterRedirect} className='register-redirect-button'>
          Don't have an account? Register
        </button>
      </form>
    </div>
  );
}

export default Login;
