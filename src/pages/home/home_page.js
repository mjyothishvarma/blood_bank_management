import React from 'react';
import HomePage from '../../components/home/HomePage';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
class Home extends React.Component{
    render(){
       return(
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
       )
    }
}

export default Home