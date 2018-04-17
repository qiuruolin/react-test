import {createStore} from 'redux';
import reducer from '../reducer/reducer';

const initValue = {
    "first" : 1,
    "second": 2,
    "third": 3
}

export default createStore(reducer, initValue);