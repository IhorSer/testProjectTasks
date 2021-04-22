import {
    CREATE_TASK,
    DELETE_TASK,
    GET_TASKS,
    UPDATE_TASK
  } from '../actionTypes';

import { initialState } from '../initialState';

  
export const taskReducer = (state = initialState, action) => {
    //const { id } = action.payload;
    const id  = 5;
    switch (action.type) {
      case CREATE_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case GET_TASKS:
        return {
          ...state,
          tasks: action.payload
        };
      case DELETE_TASK:
        const index = state.tasks.findIndex(
            (task) => task.id === id
          );
        return {
          ...state,
          tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index+1,state.tasks.length)]
        };
      case UPDATE_TASK:
        const updatedTasks = state.tasks.map(
            (task) => {
                if(task.id === id) {
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