import axios from "axios";
import authHeader from "./AuthService";

export const getAllCartByIdAccount=async (id)=>{
    try {
        let res= await axios.get(`http://localhost:8080/api/cart/${id}`,{ headers: authHeader() });
        return res;
    } catch (e){
        return undefined;
    }
}

export const deleteCartById=async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/api/cart/delete/${id}`,{ headers: authHeader() });
        return true;
    } catch (e){
        return false;
    }
}

export const updateCartById=async (id,quantity)=>{
    try {
        await axios.patch("http://localhost:8080/api/cart/update",{id:id,quantity: quantity},{headers: authHeader()});
        return true;
    } catch (e){
        return false;
    }
}
export const createNewCart=async (cart)=>{
    try {
        let res=await axios.post("http://localhost:8080/api/cart/create",cart,{ headers: authHeader() });
        return res;
    } catch (e){
        return undefined;
    }
}
export const calculate=async(list)=>{
    try {
        let res=await axios.post("http://localhost:8080/api/cart/calculate",list,{ headers: authHeader() });
        return res.data;
    } catch (e){
        return undefined;
    }
}