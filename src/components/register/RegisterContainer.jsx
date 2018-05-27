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
                return res.json();
            }).then(function(data){
                console.log(history);
                if(data.code === 200){
                    message.success("注册成功，请登录");
                    props.registerSuccess();
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
