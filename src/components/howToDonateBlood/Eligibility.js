import React, { Component } from 'react';
import '../../styles/howtoDonBloodStyles/Eligibility.css';

class Eligibility extends Component {
  

  render() {
    

    return (
      <div className="eligibility-container">
        <nav className="eligibility-nav">
          <a href="#one" >
            <p className={`nav-item `}>
              Eligibility requirements
            </p>
          </a>
        </nav>

        <div className="eligibility-bg-container">
           
            <section className="eligibility-requirements">
              <h1 className="eligibility-section-header">General Criteria</h1>
              <ul className="eligibility-requirement-list">
                <li>Donation Frequency: At least 12 weeks.</li>
                <li>Be between the ages of 18 and 65.</li>
                <li>Have a hemoglobin level of at least 12.5 g/dL.</li>
                <li>Have a pulse between 50 and 100 beats per minute.</li>
                <li>Have a blood pressure of 100-180 mm Hg systolic and 50-100 mm Hg diastolic.</li>
                <li>Have a normal body temperature, not exceeding 37.5 °C.</li>
                <li>Not have tuberculosis, leprosy, hepatitis B or C, or HIV.</li>
                <li>Not have any heart disease or ailment.</li>
                <li>Not have asthma, epilepsy, thalassemia, sickle cell anemia, or similar conditions.</li>
              </ul>
            </section>
          

        </div>
      </div>
    );
  }
}

export default Eligibility;
