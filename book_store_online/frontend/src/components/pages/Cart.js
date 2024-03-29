import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import AccessDenied from "../errors/AccessDenied";
import {useDispatch, useSelector} from "react-redux";
import {getAllCartById, deleteCartMiddle, changeQuantity} from "../../redux/middlewares/CartMiddleware";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as paymentService from "../../services/PayServices"
import * as orderService from "../../services/OrderService"
import * as authService from "../../services/AuthService"
import {Link} from "react-router-dom";
import {getInformation} from "../../redux/middlewares/UserMiddleware";


function Cart(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const carts = useSelector(store => store.carts);
    const [info, setInfo] = useState({})
    const dispatch = useDispatch();
    const [checked, setChecked] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [flag, setFlag] = useState(true);


    const [deleteBook, setDeleteBook] = useState({
        "book": {
            "name": "hello"
        }
    });

    const validateObject = Yup.object({
            address: Yup.string().required("Vui lòng nhập địa chỉ"),
            phone: Yup.string().required("Vui lòng nhập số điện thoại ").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,"Số điện thoại không hợp lệ"),        }
    )
    const handleCheck = (id) => {
        setChecked(pre => {
            const isCheck = checked.includes(id);
            if (isCheck) {
                return checked.filter(item => item !== id)
            } else {
                return [...pre, id]
            }
        })
    }
    const handleCheckAll=()=>{
        let is=[];
        if (checked.length<carts.length){
            for(let i=0;i<carts.length;i++){
                is=[...is,carts[i].id];
            }
            setChecked(is);
        } else {
            setChecked(is);
        }

    }
    const getInfo=async ()=>{
        let res=await authService.getInfo(user.id);
        setInfo(res);
    }
    const initValue = {
        name: info.name,
        address: info.address,
        phone: info.phone
    }
    const calculationMoney = () => {
        let res=0;
        for (let i=0;i<carts.length;i++){
            if(checked.includes(carts[i].id)){
                res=res+carts[i].quantity*carts[i].salePrice
            }
        }
        return res;
    }
    const deleteCartById = () => {
        dispatch(deleteCartMiddle(deleteBook.id));
        toast.success("Xóa thành công");
        setFlag(!flag);

    }
    const increaseAmount = (item) => {
        if (item.book.quantity > item.quantity && item.quantity > 0) {
            dispatch(changeQuantity(item.id, item.quantity * 1 + 1));
        } else {
            toast.warning("Số lượng bạn chọn vượt quá số lượng còn lại");
            dispatch(changeQuantity(item.id, item.book.quantity));
        }
        setFlag(!flag);
    }
    const decreaseAmount = (item) => {
        if (item.book.quantity >= item.quantity && item.quantity > 1) {
            dispatch(changeQuantity(item.id, item.quantity - 1));
        }
        setFlag(!flag);
    }
    const changeAmountInput = (item, e) => {
        if(e.target.value * 1<=0){
            return;
        }
        if (e.target.value * 1 > item.book.quantity) {
            dispatch(changeQuantity(item.id, item.book.quantity*1));
            setFlag(!flag);
            toast.warning("Số lượng bạn chọn vượt quá số lượng còn lại");
            return;
        }
        dispatch(changeQuantity(item.id, e.target.value * 1));
        setFlag(!flag);
    }

    const createOrder = async (value) => {
        let order = JSON.parse(localStorage.getItem('order'));
        if(order){
            localStorage.removeItem('order');
        }
        if (checked.length > 0) {
            order = {idAccount: user.id, address: value.address, phone: value.phone, list: checked, name:value.name}
            let res=await orderService.checkOrder(order);
            if(res.data){
                localStorage.setItem('order', JSON.stringify(order));
                let url = await paymentService.payment(calculationMoney()*1);
                window.location.href = url;
            } else {
                toast.warning("Sản phẩm của bạn đã hết hàng");
                setChecked([]);
                dispatch(getAllCartById());
            }
        } else {
            toast.warning("Bạn chưa chọn sản phẩm cần mua");
        }
    }
    useEffect(() => {
        calculationMoney();
    }, [checked, flag])
    useEffect(()=>{
        if(user){
            getInfo();
            dispatch(getAllCartById());
            dispatch(getInformation())
        }
    },[])
    if (!user) {
        return <AccessDenied/>
    }
    if(info.id==null){
        return null;
    }
    return (
        <div className="cart">
            {carts.length > 0 ?
                <div className="row mx-0 mb-3">
                    <div className="detail col-lg-9 col-xl-9 col-sm-12 col-md-12">
                        <div className="card text-center table-responsive">
                            <table className="table mt-2 align-text-top">
                                <thead>
                                <tr>
                                    <td><input type="checkbox" onClick={handleCheckAll} checked={checked.length==carts.length}/></td>
                                    <td scope="col"></td>
                                    <td scope="col">Tên sách</td>
                                    <td scope="col">Đơn giá</td>
                                    <td scope="col">Số lượng</td>
                                    <td scope="col">Thành tiền</td>
                                    <td scope="col"></td>
                                </tr>
                                </thead>
                                <tbody>
                                {carts.map((item) => (
                                    <tr key={item.id}>
                                        <td scope="row">
                                            <input type="checkbox" onChange={() => handleCheck(item.id)}
                                                   checked={checked.includes(item.id)}
                                            />
                                        </td>

                                        <td>
                                            <Link to={`/detail/${item.book.id}`}>
                                                <img
                                                    src={item.book.image}
                                                    alt=""/>
                                            </Link>

                                        </td>
                                        <td>
                                            {item.book.name}

                                        </td>
                                        <td>{item.book.salePrice.toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <div className="d-flex justify-content-center mt-3 mx-4">
                                                <button className="btn btn-outline-dark"
                                                        onClick={() => decreaseAmount(item)}>-
                                                </button>
                                                <input type="number" style={{width: "60px"}}
                                                       className="text-center form-control mx-2"
                                                       onChange={(e) => changeAmountInput(item, e)}
                                                       value={item.quantity}/>
                                                <button className="btn btn-outline-dark"
                                                        onClick={() => increaseAmount(item)}>+
                                                </button>
                                            </div>
                                        </td>
                                        <td>{(item.book.salePrice * item.quantity).toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <button onClick={() => {
                                                setDeleteBook(item)
                                            }} className="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"><i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="detail col-lg-3 col-xl-3 col-sm-12 col-md-12">
                        <Formik initialValues={initValue} onSubmit={values => {
                            createOrder(values)
                        }} validationSchema={validateObject}>
                            <Form>
                                <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                                    <div className="m-3">
                                        <p className="mb-2">Nguời nhận </p>
                                        <Field className="form-control" type="text" id="w3review" name="name"
                                               rows="4" cols="50"/>
                                        <ErrorMessage name="name" className="text-danger"
                                                      component="small"/>
                                    </div>
                                </div>
                                <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                                    <div className="m-3">
                                        <p className="mb-2">Giao tới </p>
                                        <Field className="form-control" type="text" id="w3review" name="address"
                                               rows="4" cols="50"/>
                                        <ErrorMessage name="address" className="text-danger"
                                                      component="small"/>
                                    </div>
                                </div>
                                <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                                    <div className="m-3">
                                        <p className="mb-2">Số điện thoại </p>
                                        <Field type="text" name="phone" className="form-control"/>
                                        <ErrorMessage name="phone" className="text-danger"
                                                      component="small"/>
                                    </div>
                                </div>
                                <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                                    <div className="mt-3 mx-3 d-flex justify-content-between">
                                        <p>Tổng tiền </p>
                                        <h5>{calculationMoney().toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</h5>
                                    </div>
                                    <button type="submit" className="my-3 mx-4 btn btn-danger">Mua ngay</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                : <div><h6 className="text-center">Bạn chưa có đơn hàng nào!</h6></div>
            }
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Bạn có chắc chắn muốn xóa <span
                                className="text-primary">{deleteBook.book.name}</span> ra
                                khỏi giỏ hàng không?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Không
                                </button>
                                <button onClick={deleteCartById} type="button" className="btn btn-danger"
                                        data-bs-dismiss="modal">Có
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;