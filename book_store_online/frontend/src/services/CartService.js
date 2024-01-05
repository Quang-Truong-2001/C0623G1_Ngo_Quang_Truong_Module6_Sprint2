import axios from "axios";

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