import React from 'react';
import {Icon, message} from 'antd';
import './header.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title
        };
    }
    MoreSelect(){
        message.info("success");
    }
    render(){
        return(
            <div className="header">
                <Icon type="bars" style={{fontSize: 22}} onClick={() => this.MoreSelect(this)}/>
                {this.state.title}
                <Icon type="apple-o" style={{fontSize: 22}}/>
            </div>
        );
    }
}

export default Header;
