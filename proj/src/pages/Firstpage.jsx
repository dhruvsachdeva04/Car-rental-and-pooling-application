import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import '../style/Firstpage.css'; // Import CSS file for styling

const Firstpage = () => {
  const firebase = useFirebase();

  const handleLogout = async () => {
    try {
      await firebase.Logout();
      console.log('logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Car Rental & Car Pooling</h1>
      <div className="buttons">
        <Link to='/Login'><button className="login-button">Login</button></Link>
        <Link to='/Signup'><button className="signup-button">Signup</button></Link>
      </div>
    </div>
  );
};

export default Firstpage;
