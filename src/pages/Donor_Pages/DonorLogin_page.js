import React from 'react';
import DonorLogin from '../../components/donor/DonorLogin';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonLog extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <DonorLogin/>
            <Footer/>
        </div>
       )
    }
}

export default DonLog;