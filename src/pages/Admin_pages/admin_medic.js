import React from 'react';
import AdminMedic from '../../components/admin_components/admin_medic_comp';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AdmMed extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminMedic/>
            <Footer/>
        </div>
       )
    }
}

export default AdmMed