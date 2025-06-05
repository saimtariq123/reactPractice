import React, { useContext, useState } from 'react';
import UserContext from '../assets/context/userContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser}=useContext(UserContext);

  const handleLogin = (e) => {
    
    e.preventDefault()
    setUser({username, password });
  };

  return (
    <div style={{ width: '300px', margin: '100px auto' }}>
      <h2>Login</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button onClick={handleLogin} style={{ width: '100%', padding: '8px' }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
