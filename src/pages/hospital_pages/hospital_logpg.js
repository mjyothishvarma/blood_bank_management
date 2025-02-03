import React from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import HospitalLogin from '../../components/hospital/hosp_login';
class HospLog extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <HospitalLogin/>
            <Footer/>
        </div>
       )
    }
}

export default HospLog