import React from "react";
import Header from "../../components/layouts/Header";
import Login from "../../components/employee_components/loginpage";
import Footer from '../../components/layouts/Footer';

class EmployeeLogin extends React.Component{
    render(){
        return (
            <div>
              <Header/>
              <Login />
              <Footer/>
            </div>
          );
    }
}

export default EmployeeLogin;