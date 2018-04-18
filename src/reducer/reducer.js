import { SET_TOKEN, EXIT_USER } from '../action/ActionType';

export default (state, action) => {
    switch(action.type){
        case SET_TOKEN: 
            return {...state, ...action.user}
        case EXIT_USER:
            return {};
        default: 
            return state;
    }
}