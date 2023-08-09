import React, { useState } from 'react';

function Mpesa() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    amount: '',
    checkoutRequestID: '',
    merchantRequestID: '',
    mpesaReceiptNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Mpesa Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Checkout Request ID:</label>
          <input
            type="text"
            name="checkoutRequestID"
            value={formData.checkoutRequestID}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Merchant Request ID:</label>
          <input
            type="text"
            name="merchantRequestID"
            value={formData.merchantRequestID}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mpesa Receipt Number:</label>
          <input
            type="text"
            name="mpesaReceiptNumber"
            value={formData.mpesaReceiptNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Mpesa;
