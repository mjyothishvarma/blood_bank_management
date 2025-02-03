import React from 'react';
import DonorRegDetails from '../../components/donor/DonorRegDetails';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonRegDet extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <DonorRegDetails/>
            <Footer/>
        </div>
       )
    }
}

export default DonRegDet;