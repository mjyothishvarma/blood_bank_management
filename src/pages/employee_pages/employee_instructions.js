import React from "react";
import MainNavbar from "../../components/employee_components/mainnavbar";
import Text from "../../components/employee_components/employee_instruction_manual";
import Footer from '../../components/layouts/Footer';

class EmployeeInstructions extends React.Component{
    render(){
        return (
            <div>
              <MainNavbar />
              <Text />
              <Footer/>
            </div>
          );
    }
}

export default EmployeeInstructions;