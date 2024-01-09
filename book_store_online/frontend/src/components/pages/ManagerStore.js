import React from 'react';
import AccessDenied from "../errors/AccessDenied";

function ManagerStore(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        return <AccessDenied/>
    }
    if(user.roles.includes("ROLE_ADMIN")){
        return (
            <div><h1>Đây là trang quản lí</h1></div>
        );
    } else {
        return <AccessDenied/>
    }
}

export default ManagerStore;