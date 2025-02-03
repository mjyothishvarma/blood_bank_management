import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/employee_styles/assign_doctor.css';

const ScheduleTable = () => {
  const [data, setData] = useState([]);
  const [updatedDoctor, setUpdatedDoctor] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); 

  // Fetch schedule data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assigndoctor'); // Adjust the route if necessary
        setData(response.data);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDoctorChange = (id, newDoctorValue) => {
    setUpdatedDoctor(prev => ({
      ...prev,
      [id]: newDoctorValue, 
    }));
  };

  const updateDoctor = async (id, doctorValue) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/updateDoctor/${id}`, {
        doctor: doctorValue,
      });
      console.log('Doctor updated:', response.data);

      const updatedData = data.map(item =>
        item._id === id ? { ...item, doctor: doctorValue } : item
      );
      setData(updatedData);

      setSuccessMessage('Saved successfully!');
      alert('Updated doctor successfully');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating doctor:', error);
      alert('Failed to update doctor');
    }
  };

  return (
    <div id="schedule-table-container">
      <h1 id="schedule-table-heading">Schedule List</h1>

      {successMessage && <div id="success-message">{successMessage}</div>}

      <table id="schedule-table">
        <thead>
          <tr id="table-header">
            <th id="name-column">Name</th>
            <th id="blood-group-column">Blood Group</th>
            <th id="date-column">Date</th>
            <th id="time-column">Time</th>
            <th id="address-column">Address</th>
            <th id="doctor-column">Doctor</th>
            <th id="action-column">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} id={`row-${item._id}`}>
              <td id={`name-${item._id}`}>{item.name}</td>
              <td id={`blood-group-${item._id}`}>{item.bloodGroup}</td>
              <td id={`date-${item._id}`}>{new Date(item.date).toLocaleString()}</td>
              <td id={`time-${item._id}`}>{item.time}</td>
              <td id={`address-${item._id}`}>{item.address}</td>
              <td id={`doctor-input-${item._id}`}>
                <input
                  type="text"
                  value={updatedDoctor[item._id] || item.doctor}
                  onChange={(e) => handleDoctorChange(item._id, e.target.value)}
                  placeholder="Enter doctor's name"
                  id={`doctor-input-field-${item._id}`}
                />
              </td>
              <td id={`save-button-${item._id}`}>
                <button onClick={() => updateDoctor(item._id, updatedDoctor[item._id] || item.doctor)} id={`save-btn-${item._id}`}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
