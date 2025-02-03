import React from 'react';

import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
import AddMed from '../../components/admin_components/admin_medic_add';
class AdmAddEmp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
      
            <AddMed/>
            <Footer/>
        </div>
        
       )
    }
}

export default AdmAddEmp