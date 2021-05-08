import { ADD_CHIP, DELETE_CHIP, CLEAR_CHIPS } from '../actionTypes';

export const addChip = (chip, dispatch) => {
    return dispatch ({
        type: ADD_CHIP,
        payload: {name: chip}
    })
};

export const deleteChip = (chip, dispatch) => {
    return dispatch ({
        type: DELETE_CHIP,
        payload: chip
    })
}

export  const clearChips = (dispatch) => {
    return dispatch({
        type: CLEAR_CHIPS
    });
}