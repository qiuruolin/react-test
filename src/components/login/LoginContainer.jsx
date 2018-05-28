import { connect } from 'react-redux';
import Login from './login';
import { message } from 'antd';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // 139.199.64.27:3000
        goLogin: function(username, password, history, from){
            fetch("/api/user/validateUser", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${username}&password=${password}`
            }).then(function(res) {
                return res.json()
            }).then(function (data) {
                if(data.code === 200){
                    dispatch({type: "SET_TOKEN", uid: data.uid});
                    if(from === "*"){
                        history.replace(from);
                    }
                    else{
                        history.replace("/" + from);
                    }
                }
                else{
                    message.error("账号或密码输入错误，请重新输入");
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
