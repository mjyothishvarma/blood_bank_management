import React from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import HospitalMain from '../../components/hospital/hosp_main';
class HospMain extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <HospitalMain/>
            <Footer/>
        </div>
       )
    }
}

export default HospMain