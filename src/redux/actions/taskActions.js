import { bindActionCreators } from 'redux';
import { getAllTasks, getUserTasks, createTask, updateTask, deleteTask } from '../../api/task';
import { 
    CREATE_TASK_ERROR,
    CREATE_TASK_REQUEST,
    CREATE_TASK_RESPONSE} from '../actionTypes';

export const create = async (task, user, dispatch) => {
    task.creator = user;
    task.createdAt = new Date();
    dispatch({
        type: CREATE_TASK_REQUEST
    });
    try {
        const data = await createTask(task);
        dispatch({
            task: CREATE_TASK_RESPONSE,
            payload: task
        });
    } catch(error) {
        dispatch({
            type: CREATE_TASK_ERROR,
            payload: error
        });
    }
}