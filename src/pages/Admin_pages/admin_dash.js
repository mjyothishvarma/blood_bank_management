import React from 'react';
import AdmdashWelcome from '../../components/admin_components/admin_dashWel_comp';
import AdmHeader from './admin_header';
import AdminTransDet from '../../components/admin_components/transact_hist_comp';
import AdminDonHist from '../../components/admin_components/admin_donationHist_comp';
import Footer from '../../components/layouts/Footer';
class AdminDash extends React.Component{
    render(){
       return(
        <div>
        <AdmHeader/>
        <AdmdashWelcome/>
        <AdminTransDet/>
        <AdminDonHist/>
        <Footer/>
        </div>
        
       )
    }
}

export default AdminDash