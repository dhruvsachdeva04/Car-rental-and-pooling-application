import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import '../style/Deletepage.css'; // Import the CSS file for styling

const Deletepoolpage = () => {
    const [vehicle_number, setVehicleNumber] = useState('');
    const navigate = useNavigate(); // Get the navigate function from react-router-dom

    const handleChange = (e) => {
        const newValue = e.target.value; 
        setVehicleNumber(newValue);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8800/cars_pool/${vehicle_number}`);
            navigate('/view'); 
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <Navbar />
            <div className="delete-container">
                <h2 className="delete-heading">Enter the Vehicle Number of the Vehicle You Want to Delete fron pool Database</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="vehicle_number" className="form-label">
                            Vehicle Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="vehicle_number"
                            onChange={handleChange}
                            name='vehicle_number'
                        />
                    </div>
                </form>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </>
    )
}

export default Deletepoolpage;
