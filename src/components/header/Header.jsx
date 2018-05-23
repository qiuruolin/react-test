import React from 'react';
import {Icon} from 'antd';
import './header.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          isLogin: this.props.isLogin
        };
    }
    userExit = (e) => {
        if(this.state.isLogin){
            this.props.userExit();
        }
        console.log(this.state.isLogin);
    }
    MoreSelect = (e) => {
        this.props.history.push('/menu/' + this.props.type);
    }
    render(){
        const Exit = this.state.isLogin? <Icon type="logout" style={{fontSize: 22}} onClick={this.userExit}/> : <div></div>;
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
