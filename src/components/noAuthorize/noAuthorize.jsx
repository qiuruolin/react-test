import React from 'react';
// import {Link} from 'react-router-dom';

class NoAuthorize extends React.Component{
    login = (e) => {
        this.props.history.push('/user');
    }
    render(){
        return(
            <div style={{padding: "10px"}}>您还未登录，点击<span onClick={this.login} style={{color: "rgb(70, 171, 238)"}}>这里</span>进行登录</div>
        )
    }
}

export default NoAuthorize;