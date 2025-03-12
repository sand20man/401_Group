'use client';
import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.inputLabel}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.inputField}
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter your email"
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.inputLabel}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.inputField}
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Enter your password"
        />
      </div>

      <div className={styles.termsGroup}>
        <label className={styles.termsContainer}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: e.target.checked,
                }))
              }
              className={styles.hiddenCheckbox}
            />
            <div className={styles.checkboxIcon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 4L6 11.3333L2.66666 8"
                  stroke="#F5F5F5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <span className={styles.termsText}>
            I agree to the Terms of Service
          </span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Register
      </button>
    </form>
  );
};
