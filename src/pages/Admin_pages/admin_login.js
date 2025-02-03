import React from 'react';
import AdminLogin from '../../components/admin_components/admin_login_comp';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class AdmLog extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <AdminLogin/>
            <Footer/>
        </div>
       )
    }
}

export default AdmLog