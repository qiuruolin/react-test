import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

class Info extends React.Component{
    render(){
        return(
            <div className="info">
                <Header title="通知"/>
                <Footer/>
            </div>
        );
    }
}

export default Info;
