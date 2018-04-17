import React from 'react';
import {Input, Icon, Button} from 'antd';
import { PropTypes } from 'prop-types';
//未将store提升至全局时使用的代码
// import Store from '../../store/index'
// import * as Actions from '../../action/action'

class Login extends React.Component{
    constructor(props, context){
        super(props, context);
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
        //未将store提升至全局时使用的代码
        // console.log(Store.getState());
        // Store.dispatch(Actions.setToken({
        //     name: "qi", 
        //     password: "ss"
        // }))
        const {store, action} = this.context;
        store.dispatch(action.setToken({
            name: "qi", 
            password: "ss"
        }))
    }
    componentDidMount() {
        //未将store提升至全局时使用的代码
        // Store.subscribe(this.onChange);
        this.context.store.subscribe(this.onChange);
    }
    onChange = (e) => {
        //未将store提升至全局时使用的代码
        // Store.getState()
        console.log(this.context.store.getState());
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

Login.contextTypes = {
    store: PropTypes.object,
    action: PropTypes.object
};

export default Login;
