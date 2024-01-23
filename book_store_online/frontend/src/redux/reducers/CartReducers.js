import {ADD_CART, DELETE_CART, GET_ALL_CART, UPDATE_CART} from "../constant";


export const cartReducer = (cart = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_CART:
            return payload;
        case DELETE_CART:
            let temp = [...cart];
            temp = temp.filter(value => value.id != payload)
            return temp;
        case UPDATE_CART:
            let update=[...cart];
            for(let i=0;i<update.length;i++){
                if(update[i].id===payload.id && update[i].book.quantity>=payload.quantity&&payload.quantity>0){
                    update[i].quantity=payload.quantity;
                    break;
                }
            }
            return update;
        case ADD_CART:
            let add=[...cart];
            add=add.filter( value=> value.book.id !== payload.book.id);
            add=[...add,payload];
            return add;
        default:
            return cart;
    }
}
