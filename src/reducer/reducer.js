import { combineReducers } from "redux";

import isLogin from './modules/login';

var reducer = combineReducers({
    isLogin
});

export default reducer;