import { createStore } from 'redux';
import reducer from '../reducer/reducer';

// var initState = {
//     login: false
// }

export default createStore(reducer);