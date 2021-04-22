import { createStore, combineReducers } from 'redux';
import { initialState } from './initialState';

import { taskReducer } from './reducers/taskReducer';
import { userReducer } from './reducers/userReducer';

const reducers = combineReducers({
    user: userReducer,
    tasks: taskReducer
});

export const store = createStore(reducers, initialState);