import {
    ADD_CHIP,
    DELETE_CHIP,
    CLEAR_CHIPS
} from '../actionTypes';

const initialState = {
    chips: []
} 

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHIP: {
            const data = state.chips ? [...state.chips, action.payload] : [action.payload]
            return {
                ...state,
                chips: data
            }
        }
        case DELETE_CHIP: {
            return {
                ...state,
                chips: state.chips.filter(chip => chip !== action.payload)
            }
        }
        case CLEAR_CHIPS: {
            return {
                ...state,
                chips: []
            }
        }
        default: 
            return state
    }
}