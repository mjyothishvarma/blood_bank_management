import React from 'react';
import AdminHospManUpd from '../../components/admin_components/admin_hosp_upd';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class UpdHosp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminHospManUpd/>
            <Footer/>
        </div>
        
       )
    }
}

export default UpdHosp