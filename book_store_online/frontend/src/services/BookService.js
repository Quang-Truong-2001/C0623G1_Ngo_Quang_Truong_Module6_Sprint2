
import axios from "axios";


export const getAllBookBySearch=async (name,author,min,max,page,category)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/book/list?name=${name}&author=${author}&min=${min}&max=${max}&page=${page}&category=${category}`);
        return res;
    } catch (e){
        return undefined;
    }
}
export const getAllBookBestSeller=async ()=>{
    try {
        let res=await axios.get("http://localhost:8080/api/book/best_seller");
        return res
    } catch (e){
        return undefined;
    }
}
export const getBookById=async (id)=>{
    try {
        let res=await axios.get(`http://localhost:8080/api/book/${id}`);
        return res.data;
    } catch (e){
        return undefined;
    }
}