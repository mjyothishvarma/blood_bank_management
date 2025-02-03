import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../../styles/donorStyles/DonationHistory.css';

class DonationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      errorMessage: '',
      isLoggedIn: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:5000/api/donor/donations', {
        withCredentials: true,
      });

      if (response.status === 200) {
        this.setState({ donations: response.data });
      }
    } catch (error) {
      this.setState({
        isLoggedIn: false,
        errorMessage: 'Session expired. Please log in again.',
      });
    }
  }

  render() {
    const { donations, errorMessage, isLoggedIn } = this.state;

    if (!isLoggedIn) {
      return <Navigate to="/donor/login" />;
    }

    return (
      <div className="donation-history-container">
        <h2>Donation History</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {donations.length > 0 ? (
          <table className="donation-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Blood Group</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={index}>
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                  <td>{donation.bloodGroup}</td>
                  <td>{donation.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No donation history available.</p>
        )}
      </div>
    );
  }
}

export default DonationHistory;
