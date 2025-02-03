import React, { Component } from "react";
import axios from "axios";
import '../../styles/employee_styles/assign_donors.css';
import { Navigate } from "react-router-dom";

class AssignedPatients extends Component {
  state = {
    patients: [],
    errorMessage: '',
    redirecttologin: false,
  };

  async componentDidMount() {
    const username = localStorage.getItem('mpusername');

    if (!username) {
      this.setState({ errorMessage: 'No username found, please login again.' });
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/api/assigneddonors', {
        params: { username },
      });

      if (response.data) {
        this.setState({ patients: response.data });
      }
    } catch (error) {
      console.error('Error fetching patients:', error);
      this.setState({ errorMessage: 'Failed to load patient details' });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('mpusername');
    this.setState({ redirecttologin: true });
  };

  render() {
    const { patients, errorMessage, redirecttologin} = this.state;
    if(redirecttologin){
        return <Navigate to="/medicalprofessional" />
    }

    return (
      <div id="assigned-patients-container">
        <h2 id="assigned-patients-title">Assigned Patients</h2>

        {errorMessage && <p id="error-message">{errorMessage}</p>}

        {patients.length === 0 ? (
          <p id="no-patients-message">No patients assigned to you.</p>
        ) : (
          <table id="patients-table">
            <thead>
              <tr id="patients-table-header">
                <th id="patient-name-header">Patient Name</th>
                <th id="blood-group-header">Blood Group</th>
                <th id="assigned-date-header">Assigned Date</th>
                <th id="address-header">Address</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient._id} id={`patient-row-${patient._id}`}>
                  <td id={`patient-name-${patient._id}`}>{patient.name}</td>
                  <td id={`blood-group-${patient._id}`}>{patient.bloodGroup}</td>
                  <td id={`assigned-date-${patient._id}`}>{new Date(patient.date).toLocaleDateString()}</td>
                  <td id={`address-${patient._id}`}>{patient.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button id="logout-action-button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default AssignedPatients;
