import React from "react";
import Header from "../../components/employee_components/mainnavbar";
import ScheduleTable from "../../components/employee_components/assign_doctor";
import Footer from '../../components/layouts/Footer';

class AssignDoctor extends React.Component{
    render(){
        return (
            <div>
              <Header/>
              <ScheduleTable />
              <Footer/>
            </div>
          );
    }
}

export default AssignDoctor;