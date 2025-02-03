import React from 'react';
import AdminHosp from '../../components/admin_components/admin_hospMan';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AdmHosp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminHosp/>
            <Footer/>
        </div>
        
       )
    }
}

export default AdmHosp