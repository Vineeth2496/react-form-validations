import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './App.css';
import './signin-form.css'

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Password validation: At least 8 chars, 1 letter, 1 number
  const validatePassword = (pwd) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd);
  };
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    setSuccessMessage('');
    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters, with 1 letter & 1 number');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (valid) {
      setSuccessMessage('Sign In Successful!');
      console.log('Sign In Data:', { email, password });
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={emailError ? 'input-error' : ''}
      />
      {emailError && <p className="error">{emailError}</p>}
      <div className="password-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? 'input-error' : ''}
        />
        <span
          className="toggle-eye"
          onClick={() => setShowPassword(!showPassword)}
          title="Toggle password visibility"
        >
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>
      {passwordError && <p className="error">{passwordError}</p>}
      <button type="submit">Login</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default SignInForm;





  // Keyboard shortcut: Ctrl + H
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.ctrlKey && e.key.toLowerCase() === 'h') {
  //       setShowPassword((prev) => !prev);
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, []);