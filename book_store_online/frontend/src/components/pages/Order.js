import React, {useEffect, useState} from 'react';
import * as cartService from "../../services/CartService"
import {toast} from "react-toastify";
import AccessDenied from "../errors/AccessDenied";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/Store";
import {getAllCartById} from "../../redux/middlewares/CartMiddleware";
import {getInfo} from "../../redux/middlewares/UserMiddleware";
import * as orderService from "../../services/OrderService"
import {Link} from "react-router-dom";
import OrderDetail from "./OrderDetail";

function Order(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    const getAllOrder = async () => {
        let res = await orderService.getAllOrder(user.id, page);
        if (res.status === 200) {
            setList(res.data.content);
        } else {
            setList([]);
        }

    }
    useEffect(() => {
        getAllOrder();
    }, [])
    if (!user) {
        return <AccessDenied/>
    }

    return (
        <div className="order-detail">
            {list.length > 0 ?
                <div className="row mx-0">
                    <div className="detail col-lg-12 col-xl-12 col-sm-12 col-md-12">
                        {list.map((item, index) => (
                            <div className="text-center mb-5 bg-white rounded-2">
                                <div
                                    className="d-flex justify-content-start ps-5 pt-3  fw-bold">
                                    <div className="">Mã đơn hàng: {item.code}</div>
                                    <div
                                        className="mx-4">{new Date(item.dateBuy).toLocaleTimeString()} : {new Date(item.dateBuy).toLocaleDateString()}</div>
                                </div>
                                <hr/>
                                <div className="my-0">
                                    <table className="table my-2">
                                        <thead>
                                        </thead>
                                        <tbody>
                                        <>
                                            <OrderDetail idOrder={item.id}/>
                                        </>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row justify-content-end me-2">
                                    <div className="col-3 d-flex bg-warning ps-3 py-3 mb-2 rounded-2 fw-bold">
                                        <div className="ms-5">Tổng tiền:</div>
                                        <div className="ms-3"></div>
                                        <div className="ms-5 me-3">{item.totalMoney.toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })} </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                : <div><h6 className="text-center">Bạn chưa có đơn hàng nào!</h6></div>
            }
        </div>
    );
}

export default Order;