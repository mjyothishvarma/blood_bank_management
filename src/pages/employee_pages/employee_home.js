import React from "react";
import MainNavbar from "../../components/employee_components/mainnavbar";
import Dashboard from "../../components/employee_components/employee_dashboard";
import Footer from '../../components/layouts/Footer';
class EHome extends React.Component{
    render(){
        return (
            <div>
              <MainNavbar />
              <Dashboard />
              <Footer/>
            </div>
          );
    }
}

export default EHome;