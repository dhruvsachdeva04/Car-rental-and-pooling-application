import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Addtwo.css';

const Addtwo = () => {
  const [formData, setFormData] = useState({
    vehicle_number: '',
    vehicle_type: '',
    company: '',
    model: '',
    owner_contact: '',
    departure_from: '',
    arrival_at: '',
    capacity: null,
    time_of_dep: '',
    date_of_dep: ''
  });

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty or null
    for (const key in formData) {
      if (!formData[key]) {
        alert(`${key.replace('_', ' ')} cannot be empty or null.`);
        return;
      }
    }
  
    // Check if vehicle_number is longer than 10 digits
    if (formData.vehicle_number && formData.vehicle_number.toString().length > 10) {
      alert('Vehicle number cannot be longer than 10 digits.');
      return;
    }
  
    // Check if owner_contact is not of length 10 digits
    if (formData.owner_contact && formData.owner_contact.toString().length !== 10) {
      alert('Owner contact number should be of length 10 digits only.');
      return;
    }
  
    try {
      await axios.post('http://localhost:8800/cars_pool', formData);
      navigate('/view'); // Redirect to '/view' URL
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="container">
      <h2 className="form-heading">Enter the details of the vehicle you want to put on pooling database</h2>
      <div className="form-box">
        <form>
          <div className="mb-3">
            <label htmlFor="vehicle_number" className="form-label">Vehicle Number</label>
            <input
              type="text"
              className="form-control"
              id="vehicle_number"
              name="vehicle_number"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="vehicle_type" className="form-label">Vehicle Type</label>
            <input
              type="text"
              className="form-control"
              id="vehicle_type"
              name="vehicle_type"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="owner_contact" className="form-label">Owner Contact</label>
            <input
              type="number"
              className="form-control"
              id="owner_contact"
              name="owner_contact"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departure_from" className="form-label">Departure From</label>
            <input
              type="text"
              className="form-control"
              id="departure_from"
              name="departure_from"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="arrival_at" className="form-label">Arrival At</label>
            <input
              type="text"
              className="form-control"
              id="arrival_at"
              name="arrival_at"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="capacity" className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              id="capacity"
              name="capacity"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time_of_dep" className="form-label">Time of Departure</label>
            <input
              type="time"
              className="form-control"
              id="time_of_dep"
              name="time_of_dep"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date_of_dep" className="form-label">Date of Departure</label>
            <input
              type="date"
              className="form-control"
              id="date_of_dep"
              name="date_of_dep"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addtwo;
