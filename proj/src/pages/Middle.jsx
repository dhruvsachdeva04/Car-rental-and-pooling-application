import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase.jsx';
import '../style/Middle.css'; // Import CSS file for styling


const MyForm = () => {

  const firebase = useFirebase();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: null,
    phoneNumber: null,
    profession: ''
  });

  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const manager = async (e) => {
    e.preventDefault();
  
    // Check if the phone number is not of length 10 digits
    if (formData.phoneNumber.toString().length !== 10) {
      alert('Phone number must be of length 10 only.');
      return;
    }
  
    // Call the addDocu function from Firebase context
    const res = await firebase.addDocu(formData.name, formData.gender, formData.age, formData.phoneNumber, formData.profession);
    console.log(res);
    navigate('/Home');
  };
  
  

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-heading">Enter User Details</h2>
        <form onSubmit={manager} className="my-form">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputGender" className="form-label">Gender</label>
            <select
              className="form-select"
              id="exampleInputGender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputAge"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhoneNumber" className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPhoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputProfession" className="form-label">Profession</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputProfession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;










