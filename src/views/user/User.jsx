import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../../components/login/login';
import Register from '../../components/register/register'
import './user.css';
import UserContent from '../../components/user/userContent';
import { PropTypes } from 'prop-types';

class User extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            content: "login"
        }
    }
    componentDidMount() {
        let obj = this.context.store.getState();
        if(obj.username){
            this.setState({content: "user"})
        }
        this.context.store.subscribe(this.onChange);
    }
    onChange = (e) => {
        let obj = this.context.store.getState();
        if(obj.username){
            this.setState({content: "user"})
        }
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    render(){
        const {content} = this.state;
        let Content;
        switch(content){
            case "login":
                Content = <Login gotoRegister={() => {this.gotoReg()}} />;
                break;
            case "register":
                Content = <Register gotoLogin={() => {this.gotoLogin()}}/>;
                break;
            case "user":
                Content = <UserContent/>;
                break;
            default:
                Content = <Login gotoRegister={() => {this.gotoReg()}}/>;
                break;
        }
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


User.contextTypes = {
    store: PropTypes.object,
    action: PropTypes.object
};

export default User;

