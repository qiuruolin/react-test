import React from 'react';
import Header from '../../components/header/Header';
import './home.css'
import Footer from '../../components/footer/Footer';
import Tab from '../../components/tabs/Tab';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Header/>
                <Tab/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
