import {
    CREATE_TASK_REQUEST,
    CREATE_TASK_RESPONSE,
    CREATE_TASK_ERROR,
    DELETE_TASK,
    GET_TASKS,
    UPDATE_TASK
  } from '../actionTypes';

const initialState = {
    tasks: [],
    isLoading: false,
    error: null
}
  
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_TASK_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case CREATE_TASK_RESPONSE:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          isLoading: false,
          error: null
        };
      case CREATE_TASK_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      case GET_TASKS:
        return {
          ...state,
          tasks: action.payload
        };
      case DELETE_TASK:
        const index = state.tasks.findIndex(
            (task) => task.id === task.id
          );
        return {
          ...state,
          tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index+1,state.tasks.length)]
        };
      case UPDATE_TASK:
        const updatedTasks = state.tasks.map(
            (task) => {
                if(task.id === task.id) {
                    return action.payload;
                }
                return task;
            }
          );
        return {
          ...state,
          tasks: updatedTasks
        };
      default:
        return state;
    }
}