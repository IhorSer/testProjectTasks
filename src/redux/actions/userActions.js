import {login, logout, register, initUser} from '../../api/user';
import {SET_AUTH, SET_UNAUTH} from '../actionTypes';

export const logInUser = (email, password) => {
    return login(email, password).then(() => ({}));
}

export const signOutUser = () => {
    return logout().then(() => ({}));
}

export const registerUser = (email, password) => {
    return register(email, password).then(() => ({}));
}

export const initAuth = () => {
    return dispatch => initUser(user => {
        return user ? dispatch({
            type: SET_AUTH,
            payload: {
                user
            }
        }) : dispatch({
            type: SET_UNAUTH
        });
    });
}