import React, {useEffect, useState} from 'react';
import * as cartService from "../../services/CartService"
import {toast} from "react-toastify";
import AccessDenied from "../errors/AccessDenied";
import async from "async";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/Store";
import {getAllCartById} from "../../redux/middlewares/CartMiddleware";
import {getInfo} from "../../redux/middlewares/UserMiddleware";
function Cart(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const carts=useSelector(store=>store.carts);
    const info=useSelector(store=>store.infos);
    const dispatch=useDispatch();
    const [checked,setChecked]=useState([]);
    const [address,setAddress]=useState(info.address);
    const [phone,setPhone]=useState(info.phone);
    const [deleteBook,setDeleteBook]=useState({
        "book":{
            "name":"hello"
        }
    });

    const calculationMoney=()=>{
        let result=0;
        for(let i=0;i<checked.length;i++){
            result= result + checked[i].quantity*checked[i].salePrice;
        }
        return result.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND'
        });
    }
    const deleteCartById = async () => {
        await cartService.deleteCartById(deleteBook.id);
        toast.success("Xóa thành công");
        setChecked([])
        dispatch(getAllCartById());

    }
    const increaseAmount=async (item)=>{
        let is=await cartService.updateCartById(item.id,item.quantity*1+1);
        if(is){
            setChecked([])
            dispatch(getAllCartById())
        }
    }
    const decreaseAmount=async (item)=>{
        let is=await cartService.updateCartById(item.id,item.quantity*1-1);
        if(is){
            setChecked([])
            dispatch(getAllCartById())
        }
    }
    const changeAmountInput =async (item,e) => {
        let amount=e.target.value*1;
        if(amount<1){
            amount = 1;
        }
        let is=await cartService.updateCartById(item.id,amount);
        if(is){
            setChecked([])
            dispatch(getAllCartById())
        }
    }
    const handleCheck=(value)=>{
        setChecked(pre=>{
            const isCheck=checked.includes(value);
            if(isCheck){
                return checked.filter(item=>item.id !== value.id)
            } else {
                return [...pre,value]
            }
        })
    }
    const changeAddress=(e)=>{
        setAddress(e.target.value);
    }
    const changePhone=(e)=>{
        setPhone(e.target.value);
    }

    useEffect(()=>{
        dispatch(getAllCartById());
        dispatch(getInfo());
    },[])
    if(!user){
        return <AccessDenied/>
    }


    return (
        <div className="cart">
            {carts.length>0?
                <div className="row mx-0 mb-3">
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
                                {carts.map((item) => (
                                    <tr key={item.id}>
                                        <td scope="row">
                                            <input type="checkbox" onChange={()=>handleCheck(item)}
                                            checked={checked.includes(item)}
                                            />
                                        </td>
                                        <td>
                                            <img
                                                src={item.book.image}
                                                alt=""/>
                                        </td>
                                        <td>{item.book.salePrice.toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <div className="d-flex justify-content-center mt-3 mx-4">
                                                {item.quantity===1?
                                                    <button className="btn btn-outline-dark">-</button>:
                                                    <button className="btn btn-outline-dark" onClick={()=>decreaseAmount(item)}>-</button>
                                                }
                                                <input type="number" style={{width: "60px"}} className="form-control mx-2"
                                                       onChange={(e)=>changeAmountInput(item,e)}  value={item.quantity.toString()}/>
                                                <button className="btn btn-outline-dark" onClick={()=>increaseAmount(item)}>+
                                                </button>
                                            </div>
                                        </td>
                                        <td>{(item.book.salePrice*item.quantity).toLocaleString('vi', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}</td>
                                        <td>
                                            <button onClick={() => {
                                                setDeleteBook(item)
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
                                          value={address} onChange={changeAddress}></textarea>
                            </div>
                        </div>
                        <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                            <div className="m-3">
                                <p className="mb-2">Số điện thoại </p>
                                <input type="text" className="form-control" onChange={changePhone} value={phone}/>
                            </div>
                        </div>
                        <div className="card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                            <div className="mt-3 mx-3 d-flex justify-content-between">
                                <p>Tổng tiền </p>
                                <h5>{calculationMoney()}</h5>
                            </div>
                            <button className="my-3 mx-4 btn btn-danger">Mua ngay</button>
                        </div>
                    </div>
                </div>
                :<div><h6 className="text-center">Bạn chưa có đơn hàng nào!</h6></div>
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
                                Bạn có chắc chắn muốn xóa <span className="text-primary">{deleteBook.book.name}</span> ra
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