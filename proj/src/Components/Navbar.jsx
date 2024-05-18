import React from 'react';
import { useFirebase } from '../context/Firebase'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const firebase = useFirebase();
  const navigate = useNavigate();


  const handleLogout = async() => {
    try {
       const res = await firebase.Logout();
      // Redirect to login page after successful logout
      console.log('logout successful');
      navigate('/Login');
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error (if any)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/see">
              See available
            </Link>
            <Link className="nav-link" to="/add">
              Add Vehicle
            </Link>
            <Link className="nav-link" to="/Feedback">
              Rental car Feedback
            </Link>
            <Link className="nav-link" to="/delete">
              Delete Vehicle
            </Link>
            <Link className="nav-link" to="/Addpagetwo">
              Add pool vehicle
            </Link>
            <Link className="nav-link" to="/deletepool">
              remove pool vehicle
            </Link>
            <Link className="nav-link" to="/view">
              view available pool
            </Link>
            <Link className="nav-link" onClick={handleLogout}>
  Logout
</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
