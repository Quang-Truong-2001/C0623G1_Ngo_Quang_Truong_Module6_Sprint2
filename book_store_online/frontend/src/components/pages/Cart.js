import React, {useEffect, useState} from 'react';
import * as cartService from "../../services/CartService"
import {toast} from "react-toastify";
import AcessDenied from "../errors/AcessDenied";
function Cart(props) {
    const user = JSON.parse(localStorage.getItem('user'));

    let id=2;
    const [list,setList]=useState([]);
    const [deleteBook,setDeleteBook]=useState({
        "name":"hello"
    });

    const deleteCartById = () => {
        console.log(deleteBook.id);
        cartService.deleteCartById(deleteBook.id);
        toast.success("Xóa thành công");
        getAllCartById();
    }
    const getAllCartById=async ()=>{
        let res= await cartService.getAllCartByIdAccount(id);
        if(res.status===200){
            setList(res.data);
        } else {
            setList([])
        }

    }
    useEffect(()=>{
        getAllCartById();
    },[])
    if(!user){
        return <AcessDenied/>
    }

    return (
        <div className="cart m-0 p-0">
            {list.length>0?
                <div className="row px-3">
                    <div className="detail col-lg-9 col-xl-9 col-sm-12 col-md-12">
                        <div className="card text-center">

                            <table className="table mt-2">
                                <thead>
                                <tr>
                                    <td scope="col">#</td>
                                    <td scope="col">Tên sách</td>
                                    <td scope="col">Đơn giá</td>
                                    <td scope="col">Số lượng</td>
                                    <td scope="col">Thành tiền</td>
                                    <td scope="col"></td>
                                </tr>
                                </thead>
                                <tbody>
                                {list.map((item) => (
                                    <tr>
                                        <td scope="row">
                                            <input type="checkbox"/>
                                        </td>
                                        <td>
                                            <img
                                                src={item.book.image}
                                                alt=""/>
                                        </td>
                                        <td>{(item.book.price - (item.book.price * item.book.discount.percent)).toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <div className="d-flex justify-content-center mt-3 mx-4">
                                                <button className="btn btn-outline-dark">-</button>
                                                <button className="btn btn-outline-dark mx-2">{item.quantity}</button>
                                                <button className="btn btn-outline-dark">+</button>
                                            </div>
                                        </td>
                                        <td>{(item.quantity * (item.book.price - (item.book.price * item.book.discount.percent))).toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <button onClick={() => {
                                                setDeleteBook(item.book)
                                            }} className="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="detail col-lg-3 col-xl-3 col-sm-12 col-md-12">
                        <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                            <div className="m-3">
                                <p className="mb-2">Giao tới </p>
                                <textarea className="form-control" id="w3review" name="w3review" rows="4" cols="50"
                                          placeholder="Nhập địa chỉ của bạn"></textarea>
                            </div>
                        </div>
                        <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                            <div className="m-3">
                                <p className="mb-2">Voucher </p>
                                <input type="text" className="form-control" placeholder="Nhập voucher nếu có"/>
                            </div>
                        </div>
                        <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                            <div className="mt-3 mx-3 d-flex justify-content-between">
                                <p>Tạm tính </p>
                                <h5>99.000 đ </h5>
                            </div>
                            <div className="mt-3 mx-3 d-flex justify-content-between">
                                <p>Giảm giá </p>
                                <h5>10.000 đ </h5>
                            </div>
                            <hr className="mx-2"/>
                            <div className="mt-2 mx-3 d-flex justify-content-between">
                                <p>Tổng tiền </p>
                                <h5>89.000 đ </h5>
                            </div>
                            <button className="my-3 mx-4 btn btn-danger">Mua ngay</button>
                        </div>
                    </div>
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
                                    Bạn có chắc chắn muốn xóa <span className="text-primary">{deleteBook.name}</span> ra
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
                :<div><h6 className="text-center">Bạn chưa có đơn hàng nào!</h6></div>
            }

        </div>
    );
}

export default Cart;