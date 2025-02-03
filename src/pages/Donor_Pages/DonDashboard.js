import React from 'react';
import Dashboard from '../../components/donor/Dashboard';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonDashboard extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <Dashboard/>
            <Footer/>
        </div>
       )
    }
}

export default DonDashboard