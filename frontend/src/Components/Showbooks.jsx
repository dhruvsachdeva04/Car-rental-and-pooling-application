import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import '../style/Showbooks.css'; // Import CSS file for styling

const Showbooks = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:8800/cars');
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCars();
  }, []);

  return (
    <>
      <Navbar />
      <div className='cars-container'>
        <h1>Available Vehicles for rent</h1>
        <div className='cars-list'>
          {cars.map((car) => (
            <div className='car' key={car.vehicle_number}>
              <h2>Vehicle No. {car.vehicle_number}</h2>
              <p>Type: {car.vehicle_type}</p>
              <p>Company: {car.company}</p>
              <p>Model: {car.model}</p>
              <p>Owner's Contact: {car.owner_contact}</p>
              <p>State: {car.vehicle_state}</p>
              <p>City: {car.vehicle_city}</p>
              <p>Region: {car.vehicle_region}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Showbooks;
