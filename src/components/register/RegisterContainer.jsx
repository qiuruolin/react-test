import { connect } from 'react-redux';
import {message} from 'antd';

import Register from './register';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        register: function(user, history){
            let userString = JSON.stringify(user);
            fetch('/api/user/registerUser', {
                method: 'post',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                },
                body: `user=${userString}`
            }).then(function(res){
                return res.json()
            }).then(function(data){
                if(data.code === 200){
                    message.success("注册成功，请登录");
                    props.registerSuccess();
                }
                else{
                    message.error("注册失败，请稍后再试");
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
