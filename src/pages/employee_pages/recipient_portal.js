import React from "react";
import MainNavbar from "../../components/employee_components/mainnavbar";
import RecipientForm from "../../components/employee_components/recipientform";
import Footer from '../../components/layouts/Footer';

class RecipientPortal extends React.Component{
    render(){
        return (
            <div>
              <MainNavbar />
              <RecipientForm />
              <Footer/>
            </div>
          );
    }
}

export default RecipientPortal;