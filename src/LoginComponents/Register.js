import React, { useState } from 'react';
import axios from 'axios';
import '../Css/Register.css';

function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
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
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="register-input"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="register-input"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (8–15 chars, A-Z, a-z, 0-9, @#.$!)"
          className="register-input"
          value={form.password}
          onChange={handleChange}
          minLength={8}
          maxLength={15}
          required
        />
        <button type="submit" className="register-button">Register</button>
        {msg && <p className="register-message">{msg}</p>}
      </form>
    </div>
  );
}

export default Register;
