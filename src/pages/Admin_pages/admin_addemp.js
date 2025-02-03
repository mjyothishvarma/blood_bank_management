import React from 'react';
import Addemp from '../../components/admin_components/add_emp_comp';
import AdmHeader from './admin_header';
import Footer from '../../components/layouts/Footer';
class AddEmp extends React.Component{
    render(){
       return(
        <div>
            <AdmHeader/>
            <Addemp/>
            <Footer/>
        </div>
        
       )
    }
}

export default AddEmp