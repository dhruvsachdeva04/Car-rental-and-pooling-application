import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Additionform.css';

const Additionform = () => {
  const [car, setCar] = useState({
    vehicle_number: '',
    vehicle_type: '',
    company: '',
    model: '',
    owner_contact: '',
    vehicle_state: '',
    vehicle_city: '',
    vehicle_region: '',
  });

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const manager = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    for (const key in car) {
      if (car[key] === '') {
        alert(`${key.replace('_', ' ')} cannot be empty.`);
        return;
      }
    }
  
    // Check if vehicle_number is a string
    if (typeof car.vehicle_number !== 'string') {
      alert('Vehicle number must be a string.');
      return;
    }
  
    // Check if vehicle_number is longer than 10 characters
    const MAX_LENGTH = 10; // Set the maximum length you want to allow
    if (car.vehicle_number.length > MAX_LENGTH) {
      alert(`Vehicle number cannot be longer than ${MAX_LENGTH} characters.`);
      return;
    }
  
    // Check if owner_contact length is strictly 10 digits
    const contactNumber = car.owner_contact.toString(); // Convert to string to get length
    if (contactNumber.length !== 10) {
      alert('Owner contact number should be of 10 digits only.');
      return;
    }
  
    try {
      await axios.post('http://localhost:8800/cars', car);
      navigate('/see'); // Redirect to '/see' URL
    } catch (err) {
      console.log(err);
      alert('Unsuccessful'); // Display an alert for unsuccessful submission
    }
  };
  

  return (
    <div className="container">
      <h2 className="submit-heading">Submit the details of the vehicle you want to put on rent</h2>
      <div className="form-box">
        <form>
          <div className="mb-3">
            <label htmlFor="vehicleNo" className="form-label">
              Vehicle No.
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleNo"
              onChange={handleChange}
              name="vehicle_number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleType" className="form-label">
              Vehicle Type
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleType"
              onChange={handleChange}
              name="vehicle_type"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              onChange={handleChange}
              name="company"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Model
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              onChange={handleChange}
              name="model"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ownerContactNo" className="form-label">
              Owner Contact No.
            </label>
            <input
              type="number"
              className="form-control"
              id="ownerContactNo"
              onChange={handleChange}
              name="owner_contact"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="originState" className="form-label">
              Vehicle Origin State
            </label>
            <input
              type="text"
              className="form-control"
              id="originState"
              onChange={handleChange}
              name="vehicle_state"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="originCity" className="form-label">
              Vehicle Origin City
            </label>
            <input
              type="text"
              className="form-control"
              id="originCity"
              onChange={handleChange}
              name="vehicle_city"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="originRegion" className="form-label">
              Vehicle Origin Region
            </label>
            <input
              type="text"
              className="form-control"
              id="originRegion"
              onChange={handleChange}
              name="vehicle_region"
            />
          </div>
          <button onClick={manager} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additionform;
