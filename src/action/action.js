import {SET_TOKEN} from './ActionType';

export const setToken = (user) => ({
        type: SET_TOKEN,
        user: user
})