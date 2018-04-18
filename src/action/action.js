import {SET_TOKEN, EXIT_USER} from './ActionType';

export const setToken = (user) => ({
        type: SET_TOKEN,
        user: user
})

export const userExit = () => ({
        type: EXIT_USER
})