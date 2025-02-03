import React, { useState } from 'react';
import '../../styles/payment/payment.css';
import { useNavigate } from 'react-router-dom';

const savePaymentTransaction = (transactionData) => {

  fetch('/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactionData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Payment transaction saved:', data);
    })
    .catch((error) => {
      console.error('Error saving payment transaction:', error);
    });
};

const PaymentPage = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState('individual');
  const [bloodType, setBloodType] = useState('');
  const [bloodUnits, setBloodUnits] = useState(1);
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const bloodInventory = {
    'A+': 50,
    'A-': 30,
    'B+': 40,
    'B-': 20,
    'O+': 60,
    'O-': 15,
    'AB+': 10,
    'AB-': 5,
  };

  const pricePerUnit = {
    individual: 500,
    hospital: 400,
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    calculateAmount(e.target.value, bloodUnits);
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
    setErrorMessage('');
  };

  const handleBloodUnitsChange = (e) => {
    const units = parseInt(e.target.value, 10);
    if (!isNaN(units) && units > 0) {
      setBloodUnits(units);
      calculateAmount(userType, units);
    }
  };

  const calculateAmount = (userType, bloodUnits) => {
    const unitPrice = pricePerUnit[userType];
    setAmount(unitPrice * bloodUnits);
  };

  const handlePayNow = () => {
    if (!bloodInventory[bloodType]) {
      setErrorMessage('Invalid or unavailable blood type.');
      return;
    }

    if (bloodInventory[bloodType] < bloodUnits) {
      setErrorMessage('Not enough units available.');
      return;
    }

    setErrorMessage('');

    const transactionData = {
      userType: userType,
      bloodType: bloodType,
      bloodUnits: bloodUnits,
      amount: amount,
      transactionStatus: 'completed',
    };

    savePaymentTransaction(transactionData);

    alert('Payment Successful!');
    if (userType === 'hospital') {
      navigate('/hospital/home'); 
    } else if (userType === 'individual') {
      navigate('/donor/DonorProfile');
    }
  };

  return (
    <div className="container">
      <h1>Payment Page</h1>

      <label>User Type:</label>
      <select value={userType} onChange={handleUserTypeChange}>
        <option value="individual">Individual</option>
        <option value="hospital">Hospital</option>
      </select>

      <label>Blood Type:</label>
      <input
        type="text"
        value={bloodType}
        onChange={handleBloodTypeChange}
        placeholder="Enter blood type (e.g., A+, O-)"
      />

      <label>Number of Blood Units:</label>
      <div id="blood-units">
        <button
          onClick={() =>
            setBloodUnits(Math.max(bloodUnits - 1, 1), calculateAmount(userType, bloodUnits - 1))
          }
        >
          -
        </button>
        <input
          type="number"
          value={bloodUnits}
          onChange={handleBloodUnitsChange}
          min="1"
        />
        <button
          onClick={() =>
            setBloodUnits(bloodUnits + 1, calculateAmount(userType, bloodUnits + 1))
          }
        >
          +
        </button>
      </div>

      <h3 className="total-amount">Total Amount: {amount}</h3>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {bloodType &&
        bloodInventory[bloodType] >= bloodUnits &&
        !errorMessage && (
          <button className="pay-now-btn" onClick={handlePayNow}>
            Pay Now
          </button>
        )}
    </div>
  );
};

export default PaymentPage;
