import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <NavLink activeClassName="active" to="/home"><Icon type="home"><span className="title">首页</span></Icon></NavLink>
                <NavLink activeClassName="active" to="/order"><Icon type="file-text"><span className="title">订单</span></Icon></NavLink>
                <NavLink activeClassName="active" to="/user/login"><Icon type="user"><span className="title">我的</span></Icon></NavLink>
            </div>
        );
    }
}
export default Footer;