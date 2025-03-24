'use client';

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a GET request with query parameters
      const response = await fetch(
        `https://localhost:7009/api/login/check?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
        {
          method: 'GET',
        }
      );
      console.log(response);

      if (response.status == 200) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Value"
          className={styles.formInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.formLabel}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Value"
          className={styles.formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={styles.submitButton}
        onClick={() => navigate('/home')}
      >
        Sign In
      </button>
      <p
        style={{ display: hidden ? 'none' : 'block' }}
        className={styles.formLabel}
      >
        SUCCESS!!!
      </p>
      <a href="#" className={styles.forgotPassword}>
        Forgot password?
      </a>
    </form>
  );
};

export default LoginForm;
