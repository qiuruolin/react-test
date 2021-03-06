import React from 'react';
import {Input, Icon, Button, message} from 'antd';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            passwordRepeat: "",
            mail: ""
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
        else if(arg === "mail"){
            this.mailInput.focus();
            this.setState({ mail: '' });
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
    onChangeMail = (e) => {
        this.setState({ mail: e.target.value });
    }
    register = (e) => {
        const { userName, password, passwordRepeat, mail} = this.state;
        if(userName === "" || password === "" || passwordRepeat === "" || mail === ""){
            message.error("请填写完整信息")
        }
        else{
            message.info("success")
        }
    }
    render(){
        const { userName, password, passwordRepeat, mail} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "username")} /> : null;
        const suffixPwd = password ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "password")} /> : null;
        const suffixPwdRep = passwordRepeat ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "passwordRep")} /> : null;
        const suffixMail = mail ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, "mail")} /> : null;
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
                        <Input 
                            placeholder="Enter your email"
                            style={{marginTop: '10px'}}
                            type="text"
                            value={mail}
                            suffix={suffixMail}
                            onChange={this.onChangeMail}
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.mailInput = node}
                        />
                    </Input.Group>
                </div>
                <div className="submit">
                    <Button type="primary" onClick={this.register}>立即注册</Button>
                    <a className="gotoReg" type="button" onClick={this.props.gotoLogin}>已有账号，点击登录</a>
                </div>
            </div>
        );
    }
}
export default Register;