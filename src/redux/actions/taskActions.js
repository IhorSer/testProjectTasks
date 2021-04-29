import { getAllTasks, createTask, updateTask, deleteTask, getReqs } from '../../api/task';
import { 
    CREATE_TASK_ERROR,
    CREATE_TASK_REQUEST,
    CREATE_TASK_RESPONSE,
    GET_REQUIREMENTS,
    GET_ALL_TASKS,
    DELETE_TASK, 
    UPDATE_TASK} from '../actionTypes';

export const create = async (task, user, dispatch, history) => {
    task.creator = user;
    task.createdAt = new Date();
    task.chips = task.chips ? task.chips: null;
    task.isDone = false;
    task.isTaken = false;
    task.executor = null;
    dispatch({
        type: CREATE_TASK_REQUEST
    });
    try {
        const data = await createTask(task);
        dispatch({
            type: CREATE_TASK_RESPONSE,
            payload: data
        });
        history.push('/todo_list');
    } catch(error) {
        const {message} = error;
        dispatch({
            type: CREATE_TASK_ERROR,
            payload: message
        });
    }
}

export const taskDelete = async (task, dispatch) => {
    try {
        await deleteTask(task);
        dispatch({
            type: DELETE_TASK,
            payload: task
        });
    } catch (error) {
        console.log(error);
    }
} 

export const taskUpdate = async (task, dispatch) => {
    try {
        await updateTask(task);
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAll = async (dispatch) => {
    try {
        const data = await getAllTasks();
        dispatch({
            type: GET_ALL_TASKS,
            payload: data
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const requirements = async (dispatch) => {
    try {
        const data = await getReqs();
        const {reqName} = data[0];
        dispatch({
            type: GET_REQUIREMENTS,
            payload: reqName
        });
    } catch(error) {
        console.log(error.message);
    }
}