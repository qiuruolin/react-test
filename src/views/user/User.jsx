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
            content: "login",
            from: this.props.match.params.type
        }
    }
    componentDidMount() {
        let obj = this.context.store.getState();
        if(obj.username){
            this.setState({content: "user"})
        }
        else{
            this.setState({content: "login"})
        }
        this.subscribe = this.context.store.subscribe(this.onChange);
    }
    onChange = (e) => {
        let obj = this.context.store.getState();
        if(obj.username){
            switch(this.state.from){
                case "login":
                    this.setState({content: "user"});
                    break;
                case "home":
                    this.props.history.push('/home');
                    break;
                case "order":
                    this.props.history.push('/order');
                    break;
                default:
                    break;
            }
           
        }
        else{
            this.setState({content: "login"})
        }
    }
    gotoReg(){
        this.setState({ content: "register"});
    }
    gotoLogin(){
        this.setState({ content: "login" });
    }
    componentWillUnmount(){
        //取消监听事件
        this.subscribe();
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
                <Header type="user" title="个人中心" history={this.props.history}/>
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

