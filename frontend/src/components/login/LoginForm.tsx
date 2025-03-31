'use client';

import React, { useState } from 'react';
import styles from '../register/RegistrationPage.module.css';
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
        `https://localhost:5000/api/login/check?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
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
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Username here"
            className={styles.inputField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password here"
            className={styles.inputField}
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
        <br />
        <br />

        <a href="#" className={styles.forgotPassword}>
          Forgot password?
        </a>
      </form>
    </>
  );
};

export default LoginForm;
