import React, { useState, useEffect } from 'react';
import './feedback-form.css';

function FeedbackForm() {
  const [form, setForm] = useState({
    className: '',
    rollNo: '',
    topics: '',
    mentor: '',
    feedback: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Set today’s date by default
    const today = new Date().toISOString().split('T')[0];
    setForm((prev) => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.className.trim()) errs.className = 'Class name is required';
    if (!form.rollNo.trim()) errs.rollNo = 'Roll number is required';
    if (!form.topics.trim()) errs.topics = 'Topics are required';
    if (!form.mentor.trim()) errs.mentor = 'Mentor name is required';
    if (!form.feedback.trim()) errs.feedback = 'Please write some feedback';
    if (!form.date) errs.date = 'Date is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccessMessage('');

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage('Feedback submitted successfully!');
      console.log('Feedback Form Data:', form);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Student Feedback</h2>

      <input
        type="text"
        name="className"
        placeholder="Class Name"
        value={form.className}
        onChange={handleChange}
        className={errors.className ? 'input-error' : ''}
      />
      {errors.className && <p className="error">{errors.className}</p>}

      <input
        type="text"
        name="rollNo"
        placeholder="Roll Number"
        value={form.rollNo}
        onChange={handleChange}
        className={errors.rollNo ? 'input-error' : ''}
      />
      {errors.rollNo && <p className="error">{errors.rollNo}</p>}

      <input
        type="text"
        name="topics"
        placeholder="Topics Covered"
        value={form.topics}
        onChange={handleChange}
        className={errors.topics ? 'input-error' : ''}
      />
      {errors.topics && <p className="error">{errors.topics}</p>}

      <input
        type="text"
        name="mentor"
        placeholder="Mentor Name"
        value={form.mentor}
        onChange={handleChange}
        className={errors.mentor ? 'input-error' : ''}
      />
      {errors.mentor && <p className="error">{errors.mentor}</p>}

      <textarea
        name="feedback"
        placeholder="Write your feedback..."
        rows="4"
        value={form.feedback}
        onChange={handleChange}
        className={errors.feedback ? 'input-error' : ''}
      />
      {errors.feedback && <p className="error">{errors.feedback}</p>}

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className={errors.date ? 'input-error' : ''}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <button type="submit">Submit Feedback</button>

      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default FeedbackForm;
