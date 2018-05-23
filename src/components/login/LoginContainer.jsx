import { connect } from 'react-redux';

import Login from './login';

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        goLogin: function(username, password, history){
            console.log(username)
            dispatch({type: "SET_TOKEN"});
            history.replace("/home");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
