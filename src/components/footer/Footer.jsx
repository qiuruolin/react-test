import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <NavLink activeClassName="active" to="/home"><Icon type="home"><span className="title">首页</span></Icon></NavLink>
                <NavLink activeClassName="active" to="/info"><Icon type="file-text"><span className="title">通知</span></Icon></NavLink>
                <NavLink activeClassName="active" to="/user"><Icon type="user"><span className="title">我的</span></Icon></NavLink>
            </div>
        );
    }
}
export default Footer;