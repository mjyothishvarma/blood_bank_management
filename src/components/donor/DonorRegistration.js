import React, { Component } from 'react';
import '../../styles/donorStyles/DonorRegistration.css';
import { useNavigate } from 'react-router-dom';

class DonorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ errorMessage: "Passwords do not match!" });
      return;
    }

    this.props.navigate('/donor/DonorRegDetails', {
      state: { username, password }
    });
  };

  render() {
    const { username, password, confirmPassword, errorMessage } = this.state;

    return (
      <div className="donor-registration-container">
        <h2>Register as a Donor</h2>
        {errorMessage && <p className="donor-registration-error">{errorMessage}</p>}
        
        <form className="donor-registration-form" onSubmit={this.handleSubmit}>
          <div className="donor-registration-group">
            <label htmlFor="donor-username">Username:</label>
            <input
              type="text"
              id="donor-username"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="donor-registration-group">
            <label htmlFor="donor-password">Password:</label>
            <input
              type="password"
              id="donor-password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="donor-registration-group">
            <label htmlFor="donor-confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="donor-confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>

          <input className="donor-registration-submit" type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

function DonorRegistrationWrapper(props) {
  const navigate = useNavigate();
  return <DonorRegistration {...props} navigate={navigate} />;
}

export default DonorRegistrationWrapper;
