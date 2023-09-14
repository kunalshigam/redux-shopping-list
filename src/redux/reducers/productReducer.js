import { actionTypes } from "../constants/action-types";

const initialState = {
    products:[]
}

export const productReducer = ( state=initialState, action ) =>{
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products:action.payload};
    
        default:
            return state;
    }
}

export const selectedProductReducer = ( state={}, {type, payload} ) =>{
    switch (type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};

        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
    
        default:
            return state;
    }
}