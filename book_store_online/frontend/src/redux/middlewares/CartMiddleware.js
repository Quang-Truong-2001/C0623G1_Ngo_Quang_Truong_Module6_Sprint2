import * as cartService from "../../services/CartService"
import async from "async";
import {GET_ALL_CART} from "../constant";
export const getAllCartById=()=>async (dispatch)=>{
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        let res=await cartService.getAllCartByIdAccount(user.id);
        dispatch({
            type: GET_ALL_CART,
            payload: res.data
        });
    } catch (e){
        console.log(e)
    };
}