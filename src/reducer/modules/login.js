import { SET_TOKEN, EXIT_USER } from '../../action/ActionType';

export default (state, action) => {
    switch(action.type){
        case SET_TOKEN: 
            console.log("qiu");
            return {...state, ...action.user}
        case EXIT_USER:
            return state;
        default: 
            return state === undefined ? [] : state;
    }
}