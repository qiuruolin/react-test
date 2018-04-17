import { SET_TOKEN } from '../action/ActionType';

export default (state, action) => {
    switch(action.type){
        case SET_TOKEN: 
            return {...state, ...action.user}
        default: 
            return state;
    }
}