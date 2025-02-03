import React from "react";
import Header from "../../components/layouts/Header";
import MPLogin from "../../components/employee_components/mplogin";
import Footer from '../../components/layouts/Footer';

class MedicalProfessionalLogin extends React.Component{
    render(){
        return (
            <div>
              <Header/>
              <MPLogin />
              <Footer/>
            </div>
          );
    }
}

export default MedicalProfessionalLogin;