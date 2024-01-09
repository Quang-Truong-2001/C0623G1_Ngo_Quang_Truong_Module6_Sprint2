import axios from "axios";

export const login =async (account)=>{
    try {
        let res = await axios.post("http://localhost:8080/api/auth/login",account);
        return res;
    } catch (e){
        throw e.response;
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