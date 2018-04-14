import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../../components/login/login';
import Register from '../../components/register/register'
import './user.css';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "login"
        }
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    render(){
        const Content = this.state.content === "login"? <Login gotoRegister={() => {this.gotoReg()}}/> : <Register gotoLogin={() => {this.gotoLogin()}}/>;
        return(
            <div className="user">
                <Header title="个人中心"/>
                <div className="content">
                    {Content}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default User;

