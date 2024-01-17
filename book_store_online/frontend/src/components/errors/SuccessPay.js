import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as orderService from "../../services/OrderService"
import {useDispatch} from "react-redux";
import {getAllCartById} from "../../redux/middlewares/CartMiddleware";

function SuccessPay(props) {
    const order = JSON.parse(localStorage.getItem('order'));
    const [searchParams] = useSearchParams();
    const status = searchParams.get("vnp_ResponseCode");
    const navigate=useNavigate();
    const dispatch = useDispatch();


    const transaction=async ()=>{
        if(status==="00"){
            toast.success("Thanh toán thành công");
            await orderService.saveOrder(order);
            localStorage.removeItem('order');
            dispatch(getAllCartById());
            navigate("/cart");
        }  else {
            toast.error("Thanh toán thất bại");
            navigate("/cart");
        }
    }
    useEffect(()=>{
        transaction();
    },[])

    return (
        <div>
        </div>
    );
}

export default SuccessPay;