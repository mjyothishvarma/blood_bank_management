import React from 'react';
import Addhosp from '../../components/admin_components/admin_addHospComp';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AddHosp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <Addhosp/>
            <Footer/>
        </div>
        
       )
    }
}

export default AddHosp