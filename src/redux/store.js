import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState } from './initialState';

import { taskReducer } from './reducers/taskReducer';
import { userReducer } from './reducers/userReducer';
import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
    user: userReducer,
    tasks: taskReducer,
    chips: uiReducer
});

export const store = createStore(reducers, initialState, applyMiddleware(thunk));