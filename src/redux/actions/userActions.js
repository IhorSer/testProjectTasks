import {login, logout, register, initUser} from '../../api/user';
import {
    SET_UNAUTH, 
    REGISTER_USER_REQUEST,
    REGISTER_USER_RESPONSE,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_RESPONSE,
    LOGIN_USER_ERROR
} from '../actionTypes';

export const logInUser = async (userEmail, userPassword, dispatch, history) => {
    dispatch({
        type: LOGIN_USER_REQUEST
    });
    try {
        const {user} = await login(userEmail, userPassword);
        const {displayName, email, uid} = user;
        dispatch({
            type: LOGIN_USER_RESPONSE,
            payload: {
                id: uid,
                name: displayName,
                email
            }
        })
        history.push('/');
    } catch(error) {
        const {message} = error;
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: message
        });
    }
}

export const signOutUser = async (dispatch) => {
    dispatch({
        type: SET_UNAUTH
    });
    return await logout();
}

export const registerUser = async (userEmail, userPassword, dispatch, history) => {
    dispatch({
        type: REGISTER_USER_REQUEST
    });
    
    try {
        const data = await register(userEmail, userPassword);
        console.log('Data', data);
        const {user} = data;
        const {displayName, email} = user;
        dispatch({
            type: REGISTER_USER_RESPONSE,
            payload: {
                name: displayName,
                email
            }
        })
        history.push('/');
    } catch(error) {
        const {message} = error;
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: message
        });
    }
}

export const initAuth = async (dispatch, history) => {
    await initUser(data => {
        if (data) {
            const {email, displayName} = data;
            if (email) {
                dispatch({
                    type: LOGIN_USER_RESPONSE,
                    payload: {
                        name: displayName,
                        email
                    }
                })
            }
        } 
        else {
            history.location.pathname === '/register' ?
                history.push('/register') :
                history.push('/login')
        }
    });
}