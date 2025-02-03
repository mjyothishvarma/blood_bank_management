import React from "react";
import AssignedPatients from "../../components/employee_components/medicalprofessional";
import Footer from '../../components/layouts/Footer';

class AssignDonors extends React.Component{
    render(){
        return (
            <div>
              <AssignedPatients />
              <Footer/>
            </div>
          );
    }
}

export default AssignDonors;