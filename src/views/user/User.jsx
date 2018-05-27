import React from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';
import Footer from '../../components/footer/Footer';
import LoginContainer from '../../components/login/LoginContainer';
import RegisterContainer from '../../components/register/RegisterContainer'
import './user.css';
import UserContent from '../../components/user/userContent';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "login",
            from: this.props.match.params.type,
            isLogin: this.props.isLogin
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isLogin: nextProps.isLogin
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.isLogin !== this.props.isLogin || nextState.content !== this.state.content;
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    regSuccess(){
        this.setState({ content: "login" });
    }
    render(){
        const {content, isLogin, from} = this.state;
        let Content;
        if(isLogin){
            Content = <UserContent/>;
        }
        else{
            switch(content){
                case "login":
                    Content = <LoginContainer from={from} gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                    break;
                case "register":
                    Content = <RegisterContainer registerSuccess={() => this.regSuccess()} gotoLogin={() => {this.gotoLogin()}} history={this.props.history}/>;
                    break;
                default:
                    Content = <LoginContainer from={from} gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                    break;
            }
        }
        return(
            <div className="user">
                <HeaderContainer from="user" login={isLogin} title="个人中心" history={this.props.history}/>
                <div className="content">
                    {Content} 
                </div>
                <Footer/>
            </div>
        );
    }
}

export default User;

