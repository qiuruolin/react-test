import React from 'react';
import {Icon} from 'antd';
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
    componentWillReceiveProps(nextProps) {
        this.setState({
            isLogin: nextProps.login
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.login !== this.props.login;
    }
    userExit = (e) => {
        this.props.userExit(this.props.history, this.props.from);
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
