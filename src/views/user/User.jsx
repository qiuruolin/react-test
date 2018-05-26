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
            from: this.props.match.params.type,
            isLogin: this.props.isLogin
        }
    }
    componentDidMount(){
        // this.setState({isLogin: this.props.isLogin})
    }
    componentWillReceiveProps() {
        this.setState({isLogin: this.props.isLogin})
        console.log("user", this.state.isLogin)
    }
    componentshouldupdate(){
        return true;
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    render(){
        const {content, isLogin} = this.state;
        let loginVar = isLogin;
        let Content;
        if(isLogin){
            Content = <UserContent/>;
        }
        else{
            switch(content){
                case "login":
                    Content = <LoginContainer gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                    break;
                case "register":
                    Content = <Register gotoLogin={() => {this.gotoLogin()}}/>;
                    break;
                default:
                    Content = <LoginContainer gotoRegister={() => {this.gotoReg()}} history={this.props.history}/>;
                    break;
            }
        }
        return(
            <div className="user">
                <HeaderContainer type="user" login={loginVar} title="个人中心" history={this.props.history}/>
                <div className="content">
                    {Content}{this.state.isLogin} 
                </div>
                <Footer/>
            </div>
        );
    }
}

export default User;

