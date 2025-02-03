import React from 'react';
import Faq from '../../components/howToDonateBlood/faq';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

class FaqPage extends React.Component {
  
render() {

    return (
      <div>
        <Header />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default FaqPage;
