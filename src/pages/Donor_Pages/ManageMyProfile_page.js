import React from 'react';
import ManageMyProfile from '../../components/donor/ManageMyProfile';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class DonManage extends React.Component{
    render(){
       return(
        <div>
            <Header/>

            <ManageMyProfile/>
            <Footer/>
        </div>
       )
    }
}

export default DonManage;