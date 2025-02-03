import React from 'react';
import AdminDonDet from '../../components/admin_components/admin_dondet_comp';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AdminDonorDet extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminDonDet/>
            <Footer/>
        </div>
        
       )
    }
}

export default AdminDonorDet