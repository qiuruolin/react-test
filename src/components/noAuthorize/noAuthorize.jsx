import React from 'react';
import {Link} from 'react-router-dom';

class NoAuthorize extends React.Component{
    render(){
        return(
            <div style={{padding: "10px"}}>您还未登录，点击<Link to='/user' style={{color: "rgb(70, 171, 238)"}}>这里</Link>进行登录</div>
        )
    }
}

export default NoAuthorize;