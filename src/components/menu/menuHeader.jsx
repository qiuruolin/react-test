import React from 'react';
import {Icon} from 'antd';
import '../header/header.css'

class MenuHeader extends React.Component{
    goBack = (e) => {
        this.props.history.push('/home');
    }
    render(){
        return(
            <div className="header">
                <Icon type="" style={{fontSize: 22}}/>
                更多选项
                <Icon type="right" style={{fontSize: 22}} onClick={this.goBack}/>
            </div>
        );
    }
}

export default MenuHeader;
