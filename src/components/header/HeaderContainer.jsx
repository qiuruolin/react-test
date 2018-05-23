import {connect} from 'react-redux';

import Header from './Header';

function mapStateToProps(state){
    return {
        isLogin: state.isLogin
    }
}

function mapDispatchToProps(dispatch){
    return {
        userExit: function(){
            dispatch({type: "EXIT_USER"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);