import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Dashboard.css';
function Dashboard() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/dashboard', { withCredentials: true })
      .then((res) => {
        if (typeof res.data === 'string') {
          setMsg(res.data);
        } else {
          setUser(res.data);
        }
      }).catch(() => {
        setMsg('Error fetching dashboard');
      });
  }, []);

  const logout = async () => {
    await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
          <p>id :{user.id}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>{msg}</p>
      )}
    </div>
  );
}

export default Dashboard;
