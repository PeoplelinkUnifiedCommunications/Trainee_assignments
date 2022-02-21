import { ActionTypes } from "../contents/action-types"

const initailProducts = {
    products: [],
    product:{}
}

export const productReducer = (state = initailProducts, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, product: payload}
        case ActionTypes.REMOVE_SET_PRODUCTS:
            return {...state, product: {}}
        default:
            return state;
    }
}