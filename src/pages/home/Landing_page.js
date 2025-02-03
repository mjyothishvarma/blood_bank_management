import React from 'react';
import HeroSection from '../../components/landingPage/HeroSection';
import Header from '../../components/layouts/Header';
class LandingPage extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <HeroSection/>
        </div>
       )
    }
}

export default LandingPage