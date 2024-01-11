import {GET_ALL_CART} from "../constant";

export const cartReducer=(cart=[],action)=>{
    const {type, payload}=action;
    switch (type){
        case GET_ALL_CART:
            return payload;
        default:
            return cart;
    }
}
