import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Feedform.css'; // Import the CSS file

const Feedform = () => {

    
        const [formData, setFormData] = useState({
          vehicle_number: '',
          review: '',
          phone_number: '',
          name:""
          
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
  
    // Check if the vehicle number is longer than 10 letters
    if (formData.vehicle_number.length > 10) {
      alert('Vehicle number must be of length less than 10 letters.');
      return;
    }
  
    // Check if the phone number is not exactly 10 digits
    if (formData.phone_number.toString().length !== 10) {
      alert('Phone number must be exactly of length 10 digits.');
      return;
    }
  
    try {
      await axios.post('http://localhost:8800/feedback', formData);
      navigate('/Home'); // Redirect to '/Home' URL after successful submission
    } catch (err) {
      console.log(err);
    }
  };
  



  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-heading">Feedback Form</h2> 
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputCarNumber" className="form-label">
              Vehicle Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCarNumber"
              name="vehicle_number"
              onChange={handleChange}
              aria-describedby="carNumberHelp"
            />
            <div id="carNumberHelp" className="form-text">
              Please enter the car number.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputReview" className="form-label">
              Review
            </label>
            <textarea
              className="form-control"
              id="exampleInputReview"
              name="review"
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputReview" className="form-label">
              Your phone no.
            </label>
            <input
            type='number'
              className="form-control"
              id="exampleInputReview"
              name="phone_number"
              onChange={handleChange}
              rows="3"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputReview" className="form-label">
              Your Name
            </label>
            <input
            type='text'
              className="form-control"
              id="exampleInputReview"
              name="name"
              onChange={handleChange}
              rows="3"
            ></input>
          </div>
          <button onClick={handleSubmit}type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedform;
