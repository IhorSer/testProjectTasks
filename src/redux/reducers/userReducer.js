import { 
  SET_UNAUTH,
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESPONSE,
  REGISTER_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESPONSE,
  LOGIN_USER_ERROR 
} from '../actionTypes'

const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_UNAUTH:
        console.log('unauth');
        return {
          ...state,
          user: null
        };
      case REGISTER_USER_RESPONSE:
        console.log('response');
        return {
          ...state,
          isLoading: false,
          error: false,
          user: action.payload
        };
        case REGISTER_USER_REQUEST:
          console.log('request');
        return {
          ...state,
          isLoading: true,
          error: false,
          user: null
        };
        case REGISTER_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          user: null
        };
        case LOGIN_USER_RESPONSE:
        console.log('response');
        return {
          ...state,
          isLoading: false,
          error: false,
          user: action.payload
        };
        case LOGIN_USER_REQUEST:
          console.log('request');
        return {
          ...state,
          isLoading: true,
          error: false,
          user: null
        };
        case LOGIN_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          user: null
        };
      default:
        return state;
    }
  }