import React from 'react';
import AdminEmp from '../../components/admin_components/admin_empManage_comp';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AdmEmp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminEmp/>
            <Footer/>
        </div>
        
       )
    }
}

export default AdmEmp