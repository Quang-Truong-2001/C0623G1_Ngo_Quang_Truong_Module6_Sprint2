import axios from "axios";
import authHeader from "./AuthService";

export const getAllCartByIdAccount=async (id)=>{
    try {
        let res= await axios.get(`http://localhost:8080/api/cart/${id}`);
        return res;
    } catch (e){
        return undefined;
    }
}

export const deleteCartById=async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/api/cart/delete/${id}`);
        return true;
    } catch (e){
        return false;
    }
}

export const updateCartById=async (id,quantity)=>{
    try {
        await axios.patch(`http://localhost:8080/api/cart/update_quantity?id=${id}&quantity=${quantity}`);
        return true;
    } catch (e){
        return false;
    }
}
export const createNewCart=async (cart)=>{
    try {
        await axios.post("http://localhost:8080/api/cart/create",cart);
        return true;
    } catch (e){
        return false;
    }
}