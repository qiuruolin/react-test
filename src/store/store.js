import { createStore } from 'redux';
import reducer from '../reducer/reducer';

var initState = {
    isLogin: true
}

export default createStore(reducer, initState);