import React from 'react';
import {Input, Icon, Button} from 'antd';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            passwordRepeat: ""
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
        else if(arg === "passwordRep"){
            this.passwordRepInput.focus();
            this.setState({ passwordRepeat: '' });
        }
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value});
    }
    onChangePasswordRep = (e) => {
        this.setState({ passwordRepeat: e.target.value});
    }
    render(){
        const { userName, password, passwordRepeat } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "username")} /> : null;
        const suffixPwd = password ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "password")} /> : null;
        const suffixPwdRep = password ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "passwordRep")} /> : null;
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
                        <Input 
                            placeholder="Repeat your password"
                            style={{marginTop: '10px'}}
                            type="password"
                            value={passwordRepeat}
                            suffix={suffixPwdRep}
                            onChange={this.onChangePasswordRep}
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.passwordRepInput = node}
                        />
                    </Input.Group>
                </div>
                <div className="submit">
                    <Button type="primary">立即注册</Button>
                    <a className="gotoReg" type="button" onClick={this.props.gotoLogin}>已有账号，点击登录</a>
                </div>
            </div>
        );
    }
}
export default Register;