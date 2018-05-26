import { SET_TOKEN, EXIT_USER } from '../../action/ActionType';

export default (state = false, action) => {
    switch(action.type){
        case SET_TOKEN: 
            console.log(Object.assign({}, state, {isLogin: true}))
            return Object.assign({}, state, {isLogin: true});
        case EXIT_USER:
            return Object.assign({}, state, {isLogin: false});
        default: 
            return state === undefined ? [] : state;
    }
}