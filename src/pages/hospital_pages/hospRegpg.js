import React from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import HospitalRegistration from '../../components/hospital/hosp_reg';
class HospReg extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <HospitalRegistration/>
            <Footer/>
        </div>
       )
    }
}

export default HospReg