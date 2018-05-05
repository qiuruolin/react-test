import React from 'react';
import {Icon} from 'antd';
import '../header/header.css';

class MenuHeader extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            to: this.props.type
        }
    }
    goBack = (e) => {
        const {to} = this.state;
        if(to === "user"){
            this.props.history.replace('/' + to + "/login");
        }
        else
            this.props.history.replace('/' + to);
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
