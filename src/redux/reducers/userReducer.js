import {SET_AUTH, SET_UNAUTH, REGISTER_USER} from '../actionTypes'


export default function(state = initialState, action) {
    switch (action.type) {
      case SET_AUTH:
        return {
          ...state,
          isAuth: true
        };
      case SET_UNAUTH:
        return state;
      case REGISTER_USER:
        return {
          ...state,
          isAuth: true,
          ...action.payload
        };
      default:
        return state;
    }
  }