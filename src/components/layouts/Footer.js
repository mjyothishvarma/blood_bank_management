import React, { Component } from 'react';
import '../../styles/layout/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>OUR LINKS</h2>
            <ul className="footer-link-list">
              <li><a href="/">Home</a></li>
              {/* eslint-disable-next-line */}
              <li><a href="#">RakthaDhaara</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>USEFUL LINKS</h2>
            <ul className="footer-link-list">
              <li><a href="/eligibility">How Blood Donation is Useful?</a></li>
              <li><a href="/Faq">Why Blood Donation</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>About Our Website</h2>
            <p className="footer-description">
              Blood donation and transfusion service is an indispensable part of contemporary medicine and health care.
              Blood management has been recognized as a challenging task because of the life-threatening nature of blood products.
            </p>
          </div>
          <div className="footer-section" id="footer-icons">
            <div className="footer-icons-container">
              <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            </div>
            <img src="/images/logo.png" alt="Description" className="footer-logo" />
          </div>
        </div>
        <div className="footer-scrolling-headlines">
          <div className="footer-headline">
            Disclaimer: Please be informed that any changes you make and data you enter on this platform are stored securely in our database.
          </div>
        </div>
        <div className="footer-links">
          <a href="/faq">FAQ</a>
          
        </div>
      </footer>
    );
  }
}

export default Footer;
