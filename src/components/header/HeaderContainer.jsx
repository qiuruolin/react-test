import {connect} from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userExit: (history) => dispatch({type: "EXIT_USER"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);