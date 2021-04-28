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
  isAuth: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_UNAUTH:
        return {
          ...state,
          user: null,
          isLoading: false,
          isAuth: false,
          error: null
        };
      case REGISTER_USER_RESPONSE:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          error: false,
          user: action.payload
        };
        case REGISTER_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          isAuth: false,
          error: false,
        };
        case REGISTER_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          error: action.payload,
          user: null
        };
        case LOGIN_USER_RESPONSE:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          error: false,
          user: action.payload
        };
        case LOGIN_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          isAuth: false,
          error: false,
        };
        case LOGIN_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          error: action.payload,
          user: null
        };
      default:
        return state;
    }
  }