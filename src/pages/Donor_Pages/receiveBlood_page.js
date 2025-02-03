import React from "react";
import Header from "../../components/layouts/Header";
import RecipientForm from "../../components/employee_components/recipientform";
import Footer from '../../components/layouts/Footer';

class RecipientPortal extends React.Component{
    render(){
        return (
            <div>
              <Header />
              <RecipientForm />
              <Footer/>
            </div>
          );
    }
}

export default RecipientPortal;