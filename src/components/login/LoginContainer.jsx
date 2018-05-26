import { connect } from 'react-redux';

import Login from './login';

// const HOST = "http://localhost:3001";

// import user_m from '../../models/user';

function mapStateToProps(state){
    // console.log(state);
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        // 139.199.64.27:3000
        goLogin: function(username, password, history){
            fetch("/api/user/validateUser", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${username}&password=${password}`
            }).then(function(res) {
                return res.json();
            }).then(function (data) {
                if(data.code === 200){
                    dispatch({type: "SET_TOKEN", uid: data.uid});
                    history.replace("/user");
                }
            });
            // dispatch({type: "SET_TOKEN"});
            // history.replace("/home");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
