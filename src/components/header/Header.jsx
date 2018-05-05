import React from 'react';
import {Icon, message} from 'antd';
import './header.css'
import { PropTypes } from 'prop-types';
// import {createBrowserHistory} from 'history';
// const history = createBrowserHistory();

class Header extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
          title: this.props.title
        };
    }
    toggleUser = (e) => {
        const {store, action} = this.context;
        if(store.getState().username){
            message.info("exit")
            store.dispatch(action.userExit());
        }
        else{
            message.warn("您还未登录")
        }
    }
    MoreSelect = (e) => {
        // message.info("success");
        this.props.history.push('/menu/' + this.props.type);
    }
    render(){
        return(
            <div className="header">
                <Icon type="bars" style={{fontSize: 22}} onClick={this.MoreSelect}/>
                {this.state.title}
                <Icon type="logout" style={{fontSize: 22}} onClick={this.toggleUser}/>
            </div>
        );
    }
}

Header.contextTypes = {
    store: PropTypes.object,
    action: PropTypes.object
};
export default Header;
