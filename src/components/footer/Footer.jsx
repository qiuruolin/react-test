import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Link to="/home"><Icon type="home"><span className="title">首页</span></Icon></Link>
                <Link to="/info"><Icon type="file-text"><span className="title">通知</span></Icon></Link>
                <Link to="/user"><Icon type="user"><span className="title">我的</span></Icon></Link>
            </div>
        );
    }
}
export default Footer;