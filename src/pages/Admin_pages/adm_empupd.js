import React from 'react';
import AdminEmpManUpd from '../../components/admin_components/admin_empManUpdate';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class UpdEmp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminEmpManUpd/>
            <Footer/>
        </div>
        
       )
    }
}

export default UpdEmp