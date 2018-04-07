import React from 'react';
import {Icon, message} from 'antd';
import './header.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          date: '',
        };
    }
    MoreSelect(){
        message.info("success");
    }
    render(){
        return(
            <div className="header">
                <Icon type="bars" style={{fontSize: 22}} onClick={() => this.MoreSelect(this)}/>
                首页
                <Icon type="apple-o" style={{fontSize: 22}}/>
            </div>
        );
    }
}

export default Header;
