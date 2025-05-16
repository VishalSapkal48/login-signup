import React, { useState } from 'react';
import axios from 'axios';
import '../Css/Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/register', form);
      setMsg(res.data);
    } catch (err) {
      setMsg("Registration failed.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h3>Register</h3>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Register</button>
        <button type="button" onClick={() => window.location.href = '/login'}>Login</button>
        <p>{msg}</p>
      </form>
    </div>
  );
}

export default Register;
