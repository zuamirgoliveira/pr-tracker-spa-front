// src/pages/login/Login.tsx
import React, { useContext, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/user', { replace: true });
    }
  }, [loggedIn, navigate]);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BFF_URL}/auth/github`;
  };

  return (
    <div className="login-page">
      <h1>PR Tracker</h1>
      <button onClick={handleLogin}>
        <FaGithub style={{ marginRight: 8 }} />
        Login with GitHub
      </button>
    </div>
  );
}
