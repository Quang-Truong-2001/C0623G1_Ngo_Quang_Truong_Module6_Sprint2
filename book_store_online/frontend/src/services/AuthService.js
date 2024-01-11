import axios from "axios";

export const login =async (account)=>{
    try {
        let res = await axios.post("http://localhost:8080/api/auth/login",account);
        return res;
    } catch (e){
        throw e.response;
    }
}
export const getInfo =async (id)=>{
    try {
        let res = await axios.get(`http://localhost:8080/api/auth/${id}`);
        return res.data;
    } catch (e){
        return undefined;
    }
}
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {
            "Authorization": 'Bearer ' + user.accessToken,
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }
}