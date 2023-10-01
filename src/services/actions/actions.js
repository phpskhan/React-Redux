import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants'

export const addToCart = (data) =>
{
    // console.warn("Action Data : ", data)
    return{
        type: ADD_TO_CART,
        data:data
    }
}

export const removeFromCart = () =>
{
    // console.warn("Action Data : ")
    return{
        type: REMOVE_FROM_CART
    }
}