
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import '../style/Deletepage.css'; // Import the CSS file for styling

const Deletepage = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const navigate = useNavigate(); // Get the navigate function from react-router-dom

    const handleChange = (e) => {
        const newValue = e.target.value; 
        setVehicleNumber(newValue);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8800/cars/${vehicleNumber}`);
            navigate('/see'); // Redirect to '/see' page
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <Navbar />
            <div className="delete-container">
                <h2 className="delete-heading">Enter the Vehicle Number of the Vehicle You Want to Delete fron Rental Database</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="vehicleNumber" className="form-label">
                            Vehicle Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="vehicleNumber"
                            onChange={handleChange}
                            value={vehicleNumber} 
                        />
                    </div>
                </form>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </>
    )
}

export default Deletepage;
