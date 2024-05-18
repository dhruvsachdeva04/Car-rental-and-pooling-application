import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import '../style/Deletepage.css'; 

const Searchpage = () => {
    const [city_name, setCityName] = useState(null);
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        setCityName(newValue);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8800/cars/${city_name}`);
            navigate('/see'); // Redirect to '/see' page
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <Navbar />
            <div className="delete-container">
                <h2 className="delete-heading">Enter the City in which You Want to see vehicles available for rent</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="vehicle_number" className="form-label">
                            city_name
                        </label>
                        <input
                            type="number"
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

export default Searchpage;
