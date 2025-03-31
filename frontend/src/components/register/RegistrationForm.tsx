'use client';
import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const url = `https://localhost:5000/api/Login/register?first=${formData.firstName}&last=${formData.lastName}&email=${formData.email}&password=${formData.password}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a GET request with query parameters
      const response = await fetch(url, {
        method: 'GET',
      });
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

  /* const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };*/

  const navigate = useNavigate();

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="firstName" className={styles.inputLabel}>
          First Name
        </label>
        <input
          id="firstName"
          type="firstName"
          className={styles.inputField}
          value={formData.firstName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          placeholder="Enter your first name"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastName" className={styles.inputLabel}>
          Last Name
        </label>
        <input
          id="lastName"
          type="lastName"
          className={styles.inputField}
          value={formData.lastName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
          }
          placeholder="Enter your last name"
        />
      </div>
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
      <p
        style={{ display: hidden ? 'none' : 'block' }}
        className={styles.termsText}
      >
        SUCCESS!!!
      </p>

      <button
        type="submit"
        className={styles.submitButton}
        onClick={() => navigate('/')}
      >
        Register
      </button>
    </form>
  );
};
