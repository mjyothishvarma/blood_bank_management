import React, { Component } from 'react';

class HeroSection extends Component {
  render() {
    console.log("HeroSection rendered");
    return (
      <section className="hero-section">
        <h1>Welcome to the Blood Bank</h1>
        <p>Donate blood, save lives.</p>
      </section>
    );
}
}

export default HeroSection;
