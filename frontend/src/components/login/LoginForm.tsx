'use client';

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { email, password });
  };


  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1>Find and Seek Login</h1>
      <br />
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className={styles.formInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.formLabel}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={styles.formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Sign In
      </button>

      <Link to="/register2" className={styles.forgotPassword}>
        New User? Register Here!
      </Link>
    </form>
  );
};

export default LoginForm;
