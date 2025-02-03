import React from 'react';
import ScheduleMyAppointment from '../../components/donor/ScheduleMyAppointment';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonSched extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <ScheduleMyAppointment/>
            <Footer/>
        </div>
       )
    }
}

export default DonSched;