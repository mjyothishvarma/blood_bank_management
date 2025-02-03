import React from "react";
import MainNavbar from "../../components/employee_components/mainnavbar";
import IssueForm from "../../components/employee_components/issueform";
import Footer from '../../components/layouts/Footer';

class IssueFormPage extends React.Component{
    render(){
        return (
            <div>
              <MainNavbar />
              <IssueForm />
              <Footer/>
            </div>
          );
    }
}

export default IssueFormPage;