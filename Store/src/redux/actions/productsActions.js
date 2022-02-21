import { ActionTypes } from "../contents/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeselectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SET_PRODUCTS,
    }
}