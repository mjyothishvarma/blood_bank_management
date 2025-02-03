import React from 'react';
import Eligibility from '../../components/howToDonateBlood/Eligibility';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

class Eligib extends React.Component {
  
render() {

    return (
      <div>
        <Header />
        <Eligibility />
        <Footer />
      </div>
    );
  }
}

export default Eligib;
