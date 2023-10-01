import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';
const initialState = {
    cartData: []
}

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("Reducer Data : ", action)
            return [
                ...state,
                {cartData: action.data}
            ]
            case REMOVE_FROM_CART:
                // console.warn("Reducer Data : ", action)
                state.pop();
                return [
                    ...state,
                ]
            default:
                return state
    }
}