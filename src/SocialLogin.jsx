import React from 'react';
import './App.css';

function SocialLogin() {
  return (
    <div className="form-container">
      <h2>Or sign in with</h2>
      <button className="social-button">
        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
        Sign in with Google
      </button>
    </div>
  );
}

export default SocialLogin;