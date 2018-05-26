import { connect } from 'react-redux';

import User from './User';

const mapStateToProps = (state) => {
    return {
        isLogin: state.LoginReducer.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 139.199.64.27:3000
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
