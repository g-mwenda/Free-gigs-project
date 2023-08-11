import React, { useState } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Mpesa() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    amount: '',
  });

  const current_user = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the fetch request regardless of user role
    fetch("https://b55c-105-163-158-46.ngrok-free.app/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, e.g., show a success message
        console.log("M-Pesa request submitted:", data);

        // Redirect to the completed form page after successful submission
        //navigate("/completed-form");
      })
      .catch((error) => {
        // Handle error, e.g., show an error message to the user
        console.error("Error submitting M-Pesa request:", error);
      });
  };

  return (
    <>
      <NavbarComponent />
      <div style={containerStyle}>
        <h2 style={headingStyle}>M-Pesa Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Client contact:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Amount:</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

// Inline Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '16px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '12px',
};

const labelStyle = {
  fontSize: '16px',
  marginBottom: '6px',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const submitButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Mpesa;