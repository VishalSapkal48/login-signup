import React, { useState } from 'react';
import axios from 'axios';
import '../Css/Login.css'; 
function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/login', form);
    setMsg(res.data);
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className='loginform'>
        <h3>Login</h3>
        <labe> Enter the Email:</labe>
        <input name="email" type="email" onChange={handleChange} required  className='frominput'/>
        <label> Enter the Password:</label>
        <input name="password" type="password" onChange={handleChange} required  className='frominput'/>
        <button type="submit" className='loginsubmit'>Login</button>
            
            <p>{msg}</p>
      </form>
   
    </div>
  );
}

export default Login;
