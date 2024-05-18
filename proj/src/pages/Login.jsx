import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Import CSS file for styling
const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // Navigate to home
      navigate('/Home');
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function with the email and password state variables
    await firebase.Loginuser(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={email} // Bind the value to the email state variable
              onChange={(e) => setEmail(e.target.value)} // Update the email state variable
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password} // Bind the value to the password state variable
              onChange={(e) => setPassword(e.target.value)} // Update the password state variable
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
        <p>
          New user? <a href="/Signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
