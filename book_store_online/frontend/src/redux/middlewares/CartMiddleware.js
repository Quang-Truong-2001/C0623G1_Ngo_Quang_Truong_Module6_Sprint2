import * as cartService from "../../services/CartService"
import async from "async";
import {ADD_CART, DELETE_CART, GET_ALL_CART, UPDATE_CART} from "../constant";

export const getAllCartById = () => async (dispatch) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        let res = await cartService.getAllCartByIdAccount(user.id);
        dispatch({
            type: GET_ALL_CART,
            payload: res.data
        });
    } catch (e) {
        console.log(e)
    }
    ;
}
export const deleteCartMiddle = (id) => async (dispatch) => {
    try {
        await cartService.deleteCartById(id);
        dispatch({
            type: DELETE_CART,
            payload: id
        });
    } catch (e) {
        console.log(e)
    }
}
export const changeQuantity = (id, quantity) => async (dispatch) => {
    try {
        await cartService.updateCartById(id, quantity);
        dispatch({
            type: UPDATE_CART,
            payload: {id, quantity}
        });
    } catch (e) {
        console.log(e)
    }
}
export const addCartMiddle=(cart)=>async (dispatch)=>{
    try {
        let res=await cartService.createNewCart(cart);
        dispatch({
            type: ADD_CART,
            payload: res.data
        });
    } catch (e){

    }

}