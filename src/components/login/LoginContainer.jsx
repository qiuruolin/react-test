import { connect } from 'react-redux';

import Login from './login';

// const HOST = "http://localhost:3001";

// import user_m from '../../models/user';

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        goLogin: function(username, password, history){
            fetch("/api/user/validateUser", {
                method: 'get'
            }, {}).then(function(res){
                console.log(res);
            })
            // console.log(user_m);
            // user_m.validateUser(username, password, function(result){
            //     console.log(result);
            // })
            // dispatch({type: "SET_TOKEN"});
            // history.replace("/home");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
