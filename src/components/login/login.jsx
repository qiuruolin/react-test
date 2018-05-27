import React from 'react';
import {Input, Icon, Button, message} from 'antd';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }
    emitEmpty = (arg, e) => {
        if(arg === "username"){
            this.userNameInput.focus();
            this.setState({ userName: '' });
        }
        else if(arg === "password"){
            this.passwordInput.focus();
            this.setState({ password: '' });
        }
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value});
    }
    checkLogin = (e) =>{
        const {userName, password} = this.state;
        if(userName === "" || password === ""){
            message.error("用户名或密码不能为空")
        }
        else{
            this.props.goLogin(this.state.userName, this.state.password, this.props.history, this.props.from);
        }
    }
    render(){
        const { userName, password } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "username")} /> : null;
        const suffixPwd = password ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "password")} /> : null;
        return(
            <div className="login">
                <div className="meaasge">
                    <Input.Group size="large">
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                        />
                        <Input 
                            placeholder="Enter your password"
                            style={{marginTop: '10px'}}
                            type="password"
                            value={password}
                            suffix={suffixPwd}
                            onChange={this.onChangePassword}
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.passwordInput = node}
                        />
                    </Input.Group>
                </div>
                <div className="submit">
                    <Button type="primary" onClick={this.checkLogin}>登录</Button>
                    <a className="gotoReg" type="button" onClick={this.props.gotoRegister}>还没有账号，点击注册</a>
                </div>
            </div>
        );
    }
}

export default Login;
