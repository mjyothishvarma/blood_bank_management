import React from 'react';

import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
import AdminMedManUpd from '../../components/admin_components/admin_medic_upd';
class AdmMedUpd extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <AdminMedManUpd/>
            <Footer/>
        </div>
       )
    }
}

export default AdmMedUpd