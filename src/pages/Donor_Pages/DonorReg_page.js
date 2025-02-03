import React from 'react';
import DonorRegistration from '../../components/donor/DonorRegistration';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonReg extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <DonorRegistration/>
            <Footer/>
        </div>
       )
    }
}

export default DonReg