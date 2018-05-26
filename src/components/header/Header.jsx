import React from 'react';
import {Icon, message} from 'antd';
import './header.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          isLogin: this.props.login
        };
    }
    componentDidMount(){
        this.setState({isLogin: this.props.login})
    }
    componentWillReceiveProps() {
        this.setState({isLogin: this.props.login})
        console.log("header", this.state.isLogin)
    }
    componentshouldupdate(){
        return true;
    }
    userExit = (e) => {
        if(this.state.isLogin){
            this.props.userExit(this.props.history);
        }
        else{
            message.info("您还未登录")
        }
    }
    MoreSelect = (e) => {
        this.props.history.push('/menu/' + this.props.type);
    }
    render(){
        let Exit;
        if(this.state.isLogin){
            Exit = <Icon type="logout" style={{fontSize: 22}} onClick={this.userExit}/>;
        }
        else{
            Exit = <div></div>;
        }
        return(
            <div className="header">
                <Icon type="bars" style={{fontSize: 22}} onClick={this.MoreSelect}/>
                {this.state.title}
                {Exit}
            </div>
        );
    }
}

export default Header;
