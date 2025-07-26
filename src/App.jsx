import React from 'react';
import SignInForm from './SignInForm'; 
import SignUpForm from './SignUpForm';
// import FeedbackForm from './FeedbackForm';
// import SearchBar from './SearchBar';
// import SocialLogin from './SocialLogin';
import './App.css';

function App() {
  const handleSearch = (query) => {
    console.log('Search Query:', query);
  };

  return (
    <div>
      <SignInForm />
      {/* <SignUpForm /> */}
      {/* <FeedbackForm /> */}
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <SocialLogin /> */}
    </div>
  );
}

export default App;