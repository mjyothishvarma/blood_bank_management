import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/HomeStyles/HomePage.css';
import '../layouts/Footer.js';
import '../layouts/Header.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      finalVal1: 0,
      finalVal2: 0,
      finalVal3: 0,
      finalVal4: 0,
      activeDropdown: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/counts')
      .then((response) => {
        const { donorsRegistered, employeesRegistered, donationsDone, bloodUnitsCollected } = response.data;
        this.setState({
          finalVal1: donorsRegistered,
          finalVal2: employeesRegistered,
          finalVal3: donationsDone,
          finalVal4: bloodUnitsCollected,
        }, () => {
          this.incrementCounts();
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  incrementCounts = () => {
    this.incrementWithDelay('val1', this.state.finalVal1, 50);
    this.incrementWithDelay('val2', this.state.finalVal2, 400);
    this.incrementWithDelay('val3', this.state.finalVal3, 200);
    this.incrementWithDelay('val4', this.state.finalVal4, 200);
  };
  

  incrementWithDelay = (key, targetValue, delay) => {
    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState[key] < targetValue) {
          return { [key]: prevState[key] + 1 };
        } else {
          clearInterval(intervalId);  
          return null;
        }
      });
    }, delay);
  };
  

  handleMouseEnter = (dropdown) => {
    this.setState({ activeDropdown: dropdown });
  };

  handleMouseLeave = () => {
    this.setState({ activeDropdown: null });
  };

  render() {
    const {
      val1: donorsRegistered,
      val2: employeesRegistered,
      val3: donationsDone,
      val4: bloodUnitsCollected,
    } = this.state;

    return (
      <div className="homepage-container">

        {/* Count Display Section */}
        <div className="statistics-container">
          <div className="statistic-card" id="donors-count">
            <h2>Donors Registered</h2>
            <h1 className="statistic-number">{donorsRegistered}</h1>
          </div>
          <div className="statistic-card" id="employees-count">
            <h2>Employees Registered</h2>
            <h1 className="statistic-number">{employeesRegistered}</h1>
          </div>
          <div className="statistic-card" id="donations-count">
            <h2>Donations Done</h2>
            <h1 className="statistic-number">{donationsDone}</h1>
          </div>
          <div className="statistic-card" id="blood-units-count">
            <h2>Blood Units Collected</h2>
            <h1 className="statistic-number">{bloodUnitsCollected}</h1>
          </div>
        </div>

        {/* Blood Type Section */}
        <div className="blood-type-section">
          <div className="blood-type-info">
            <h1>Compatible Blood Type Donors</h1>
            <table className="blood-type-table">
              <thead>
                <tr>
                  <th>Blood Type</th>
                  <th>Donate Blood To</th>
                  <th>Receive Blood From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A+</td>
                  <td>A+, A-, B+, AB+</td>
                  <td>A+, A-, O+, O-</td>
                </tr>
                <tr>
                  <td>O+</td>
                  <td>O+, A+, B+, AB+</td>
                  <td>O+, O-</td>
                </tr>
                <tr>
                  <td>B+</td>
                  <td>B+, AB+</td>
                  <td>B+, B-, O+, O-</td>
                </tr>
                <tr>
                  <td>AB+</td>
                  <td>AB+</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>A-</td>
                  <td>A+, A-, AB+, AB-</td>
                  <td>A-, O-</td>
                </tr>
                <tr>
                  <td>O-</td>
                  <td>Everyone</td>
                  <td>O-</td>
                </tr>
                <tr>
                  <td>B-</td>
                  <td>B+, B-, AB+, AB-</td>
                  <td>B-, O-</td>
                </tr>
                <tr>
                  <td>AB-</td>
                  <td>AB+, AB-</td>
                  <td>AB-, A-, B-, O-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Articles Section */}
        <section className="articles-section">
          <h2>Latest Articles</h2>
          <div className="articles-container">
            <article className="article-card">
              <img src="/images/one.jpg" alt="Blog 1" />
              <h3>Why Blood Donation is Important</h3>
              <p>
                Blood donation is vital for saving lives. Learn the importance of donating blood
                and how it can help those in need.
              </p>
              <Link to="/Eligibility">Read More</Link>
            </article>

            <article className="article-card">
              <img src="/images/two.jpg" alt="Blog 2" />
              <h3>Eligibility for Blood Donation</h3>
              <p>
                Are you eligible to donate blood? Find out the requirements and whether you're 
                able to contribute to saving lives.
              </p>
              <Link to="/Eligibility">Read More</Link>
            </article>

            <article className="article-card">
              <img src="/images/three.jpg" alt="Blog 3" />
              <h3>How to Prepare for a Blood Donation</h3>
              <p>
                Donating blood is a simple process. Learn how to prepare for your next blood 
                donation appointment to ensure a smooth experience.
              </p>
              <Link to="/blog/preparing-for-donation">Read More</Link>
            </article>
          </div>
        </section>

        {/* Video Presentation Section */}
        <div className="video-presentation">
          <video width="90%" height="auto" autoPlay muted loop>
            <source src="/videos/blooddonation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Motivation Section */}
        <div className="motivation-section">
          <img src="/images/download.png" width="20%" alt="Blood Donation" />
          <div className="motivation-text">
            <h1>Why Should I Donate Blood</h1>
            <h3>
              Donating blood saves lives by providing essential transfusions for surgeries,
              emergencies, and treating illnesses like cancer. It supports community health,
              medical research, and personal fulfillment, making it a crucial and rewarding act
              of generosity. Overall, donating blood is a vital component of healthcare systems
              worldwide, ensuring that patients receive the lifesaving treatments they require.
            </h3>
            <div className="motivation-buttons">
              <button onClick={() => window.location.href='/donor/DonorRegistration'} className="donate-button">
                Donate Blood
              </button>
              
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="call-to-action-section">
          <h2>Become a Hero: Donate Blood</h2>
          <p>Your donation can save a life. Sign up today!</p>
          <Link to="/donor/DonorRegistration">
            <button className="cta-button">Register Now</button>
          </Link>
        </div>

        
      </div>
    );
  }
}

export default HomePage;
