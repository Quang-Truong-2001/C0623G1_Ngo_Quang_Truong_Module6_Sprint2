import React, {useEffect, useState} from 'react';
import * as cartService from "../../services/CartService"
import {toast} from "react-toastify";
import AccessDenied from "../errors/AccessDenied";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/Store";
import {getAllCartById} from "../../redux/middlewares/CartMiddleware";
import {getInformation} from "../../redux/middlewares/UserMiddleware";
import * as orderService from "../../services/OrderService"
import {Link} from "react-router-dom";
import OrderDetail from "./OrderDetail";

function Order(props) {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const [list, setList] = useState([]);
    const getAllOrder = async () => {
        let res = await orderService.getAllOrder(user.id);
        if (res.status === 200) {
            setList(res.data);
        } else {
            setList([]);
        }

    }
    function convertDateFormat(inputDateString) {
        let inputDate = new Date(inputDateString);
        if (isNaN(inputDate.getTime())) {
            return "Invalid Date";
        }
        let month=inputDate.getMonth()+1;
        return padZero(inputDate.getDate()) + "-" + padZero(month) + "-" + inputDate.getFullYear() + " - " + padZero(inputDate.getHours()) + ":" + padZero(inputDate.getMinutes()+":" +padZero(inputDate.getSeconds()));
    }

    function padZero(value) {
        return value < 10 ? "0" + value : value;
    }
    useEffect(() => {
        if (user) {
            getAllOrder();
            dispatch(getInformation());
            dispatch(getAllCartById());
        }
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
                                    className="d-flex justify-content-between ps-2 pt-3  fw-bold">
                                    <div className="">
                                        <p><span className="fw-lighter">Mã đơn hàng: </span> <span> {item.code}</span></p>
                                    </div>
                                    <div className="me-4">
                                        <p><span className="fw-lighter"> {convertDateFormat(item.dateBuy)}</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between ps-2 pt-3  fw-bold">
                                    <div>
                                        <p><span className="fw-lighter">Địa chỉ giao hàng: </span> <span>{item.address}</span></p>
                                    </div>
                                    <div className="me-4">
                                        <p><span className="fw-lighter">Số điện thoại:</span> <span>{item.phone}</span></p>
                                    </div>
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