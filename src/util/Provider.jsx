import { Component } from 'react';
import { PropTypes } from 'prop-types';

class Provider extends Component{
    getChildContext(){
        return {
            store: this.props.store,
            action: this.props.action
        }
    }
    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: PropTypes.object,
    action: PropTypes.object
}

export default Provider;