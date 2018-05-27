import {connect} from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userExit: (history, from) => {
            dispatch({type: "EXIT_USER"})
            history.replace(from);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);