import React from 'react';
import axios from 'axios'; // Import Axios
import '../../styles/employee_styles/issueform.css';  // Import CSS for styling

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      userType: '',
      issue: '',
      errors: {}
    };
  }

  validateForm = () => {
    const { name, email, userType, issue } = this.state;
    const errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!userType) {
      errors.userType = 'Please select a user type';
      isValid = false;
    }

    if (!issue.trim()) {
      errors.issue = 'Issue description is required';
      isValid = false;
    } else if (issue.length < 10) {
      errors.issue = 'Issue description must be at least 10 characters long';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      const { name, email, userType, issue } = this.state;

      axios.post('http://localhost:5000/api/issues', {
        name,
        email,
        userType,
        issue
      })
      .then((response) => {
        alert(response.data.message);

        this.setState({
          name: '',
          email: '',
          userType: '',
          issue: '',
          errors: {}
        });
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
    }
  };

  render() {
    const { name, email, userType, issue, errors } = this.state;

    return (
      <div className="issue-form-container" id="form-container">
        <h2 id="form-title">Submit Your Issue</h2>
        <form onSubmit={this.handleSubmit} id="issue-form">
          <div className="form-group" id="name-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              className="input-field"
              onChange={this.handleChange}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group" id="email-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              className="input-field"
              onChange={this.handleChange}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group" id="userType-group">
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              name="userType"
              value={userType}
              className="input-field"
              onChange={this.handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="user">Donor</option>
              <option value="employee">Employee</option>
              <option value="other">Other</option>
            </select>
            {errors.userType && <span className="error-message">{errors.userType}</span>}
          </div>

          <div className="form-group" id="issue-group">
            <label htmlFor="issue">Issue Description:</label>
            <textarea
              id="issue"
              name="issue"
              value={issue}
              className="input-field"
              onChange={this.handleChange}
              required
            />
            {errors.issue && <span className="error-message">{errors.issue}</span>}
          </div>

          <button type="submit" className="submit-button" id="submit-btn">Submit Issue</button>
        </form>
      </div>
    );
  }
}

export default IssueForm;