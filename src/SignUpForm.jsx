import React, { useState } from 'react';
import './signup-form.css';

function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    mobile: '',
    gender: '',
    interests: [],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errs = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const mobileRegex = /^\d{10}$/;
   if (!form.name.trim()) errs.name = 'Name is required';
    
   if (!form.email.trim()) errs.email = 'Email is required';
    
   else if (!emailRegex.test(form.email)) errs.email = 'Invalid email format';
    
   if (!form.password) errs.password = 'Password is required';
    
   else if (!passwordRegex.test(form.password))
      errs.password = 'Min 8 chars, 1 letter & 1 number';
    
   if (!form.confirmPassword) errs.confirmPassword = 'Confirm your password';

    else if (form.confirmPassword !== form.password)
      errs.confirmPassword = 'Passwords do not match';

    if (!form.dob) errs.dob = 'Date of birth is required';

    if (!form.mobile) errs.mobile = 'Mobile number is required';
    else if (!mobileRegex.test(form.mobile))
      errs.mobile = 'Enter a 10-digit number';
    if (!form.gender) errs.gender = 'Select gender';
    if (form.interests.length === 0) errs.interests = 'Select at least 1 interest';
    return errs;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccessMessage('');

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage('Registration Successful!');
      console.log('Form submitted:', form);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className={errors.name ? 'input-error' : ''}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={errors.email ? 'input-error' : ''}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <div className="password-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={errors.password ? 'input-error' : ''}
        />
        <span
          className="toggle-eye"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="password-wrapper">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'input-error' : ''}
        />
        <span
          className="toggle-eye"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
        >
          {showConfirmPassword ? '🙈' : '👁️'}
        </span>
      </div>
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        className={errors.dob ? 'input-error' : ''}
      />
      {errors.dob && <p className="error">{errors.dob}</p>}
      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={handleChange}
        className={errors.mobile ? 'input-error' : ''}
      />
      {errors.mobile && <p className="error">{errors.mobile}</p>}
      <div className="radio-group">
        <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
        <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
      </div>
      {errors.gender && <p className="error">{errors.gender}</p>}
      <div className="checkbox-group">
        <label><input type="checkbox" value="Gadgets" onChange={handleChange} /> Gadgets</label>
        <label><input type="checkbox" value="Clothing" onChange={handleChange} /> Clothing</label>
        <label><input type="checkbox" value="Beauty" onChange={handleChange} /> Beauty</label>
        <label><input type="checkbox" value="Books" onChange={handleChange} /> Books</label>
      </div>
      {errors.interests && <p className="error">{errors.interests}</p>}
      <button type="submit">Register</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}
export default SignUpForm;
