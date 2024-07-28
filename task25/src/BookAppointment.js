import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Patient_History: '',
    First_Name: '',
    Last_Name: '',
    Date_of_Birth: '',
    Gender: '',
    Address: '',
    Phone_Number: '',
    Password: '',
    Confirm_Password: ''
  });

  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setShowModal(true); // Show the modal
    } else {
      // Show alerts for each validation error
      Object.values(validationErrors).forEach((error) => {
        alert(error);
      });
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.First_Name?.trim()) {
      errors.First_Name = 'First Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.First_Name.trim())) {
      errors.First_Name = 'First Name should contain only letters';
    }

    if (!formData.Last_Name?.trim()) {
      errors.Last_Name = 'Last Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.Last_Name.trim())) {
      errors.Last_Name = 'Last Name should contain only letters';
    }

    if (!formData.Date_of_Birth) {
      errors.Date_of_Birth = 'Date of Birth is required';
    }

    if (!formData.Gender) {
      errors.Gender = 'Gender is required';
    }

    if (!formData.Address?.trim()) {
      errors.Address = 'Address is required';
    }

    if (!formData.Phone_Number?.trim()) {
      errors.Phone_Number = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.Phone_Number.trim())) {
      errors.Phone_Number = 'Phone Number should be 10 digits';
    }

    if (!formData.Password?.trim()) {
      errors.Password = 'Password is required';
    }

    if (!formData.Confirm_Password?.trim()) {
      errors.Confirm_Password = 'Confirm Password is required';
    } else if (formData.Password !== formData.Confirm_Password) {
      errors.Confirm_Password = 'Passwords do not match';
    }

    return errors;
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/display'); // Navigate to another page
  };

  return (
    <div className="App">
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit} className="one">
          <div>
            <label>Patient History:&emsp;</label>
            <label htmlFor="old_patient">old patient</label>
            <input
              type="radio"
              name="Patient_History"
              id="old_patient"
              value="old_patient"
              checked={formData.Patient_History === 'old_patient'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="new_patient">new patient</label>
            <input
              type="radio"
              name="Patient_History"
              id="new_patient"
              value="new_patient"
              checked={formData.Patient_History === 'new_patient'}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="First_Name">First Name</label>
            <input
              type="text"
              name="First_Name"
              id="First_Name"
              value={formData.First_Name}
              onChange={handleInputChange}
              required
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label htmlFor="Last_Name">Last Name</label>
            <input
              type="text"
              name="Last_Name"
              id="Last_Name"
              value={formData.Last_Name}
              onChange={handleInputChange}
              required
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label htmlFor="Date_of_Birth">Date of Birth</label>
            <input
              type="date"
              name="Date_of_Birth"
              id="Date_of_Birth"
              value={formData.Date_of_Birth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Gender:</label>
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="Gender"
              id="female"
              value="female"
              checked={formData.Gender === 'female'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="Gender"
              id="male"
              value="male"
              checked={formData.Gender === 'male'}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              id="Address"
              value={formData.Address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Phone_Number">Phone Number</label>
            <input
              type="tel"
              name="Phone_Number"
              id="Phone_Number"
              value={formData.Phone_Number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              id="Password"
              value={formData.Password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Confirm_Password">Confirm Password</label>
            <input
              type="password"
              name="Confirm_Password"
              id="Confirm_Password"
              value={formData.Confirm_Password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>Patient Data Saved Successfully</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default BookAppointment;
