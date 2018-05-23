import React from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';
import Footer from '../../components/footer/Footer';
import LoginContainer from '../../components/login/LoginContainer';
import Register from '../../components/register/register'
import './user.css';
import UserContent from '../../components/user/userContent';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "login",
            from: this.props.match.params.type
        }
    }
    componentDidMount() {
        
    }
    onChange = (e) => {
        
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    componentWillUnmount(){
        //取消监听事件
        
    }
    render(){
        const {content} = this.state;
        let Content;
        switch(content){
            case "login":
                Content = <LoginContainer gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                break;
            case "register":
                Content = <Register gotoLogin={() => {this.gotoLogin()}}/>;
                break;
            case "user":
                Content = <UserContent/>;
                break;
            default:
                Content = <LoginContainer gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                break;
        }
        return(
            <div className="user">
                <HeaderContainer type="user" title="个人中心" history={this.props.history}/>
                <div className="content">
                    {Content}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default User;

