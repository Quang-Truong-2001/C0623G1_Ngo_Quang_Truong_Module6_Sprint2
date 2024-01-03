import React, {useEffect, useState} from 'react';
import * as bookService from "../services/BookService"
import async from "async";
import {useParams} from "react-router-dom";

function Detail(props) {
    const {id}=useParams();
    const [book,setBook]=useState();
    const [amount,setAmount]=useState(1);
    const getBookById= async ()=>{
        let res= await bookService.getBookById(id);
        setBook(res);
    }

    useEffect(()=>{
        getBookById();
    },[]);
    if(!book) return null;
    return (
        <div className="row m-0 p-0">
            <div className="detail col-lg-4 col-xl-4 col-sm-12 col-md-12">
                <div className="image-big card rounded-3 mb-3">
                    <img className="my-5"
                         src={book.image}
                         alt=""/>
                </div>
            </div>
            <div className="detail col-lg-5 col-xl-5 col-sm-12 col-md-12">
                <div className="card rounded-3 mb-2 position-sticky">
                    <div className="ms-2">
                        <div className="d-flex align-items-center">
                            <img className="img-detail"
                                srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                width="89" height="20" alt="is_authentic"/>
                                <p>Tác giả: <span>{book.author.name}</span></p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">{book.name}</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <h5 className="ms-1 text-danger">{(book.price-(book.price*book.discount.percent)).toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND'
                            })}</h5>
                        </div>
                    </div>
                </div>
                <div className="card rounded-3">
                    <div className="ms-2 description">
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">Mô tả sản phẩm</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <p className="ms-1">{book.intro}</p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">Nội dung</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <p className="ms-1">{book.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail col-lg-3 col-xl-3 col-sm-12 col-md-12">
                <div className="buy card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                    <h6 className="mt-3 mx-4">Số lượng: </h6>
                    <div className="d-flex mt-3 mx-4">
                        {amount>1?
                            <button className="btn btn-outline-dark" onClick={()=>{setAmount(amount-1)}}>-</button>:null
                        }
                        <button className="btn btn-outline-dark mx-2">{amount}</button>
                        <button className="btn btn-outline-dark" onClick={()=>{setAmount(amount+1)}}>+</button>
                    </div>
                    <button className="mt-3 mx-4 btn btn-buy">Mua ngay</button>
                    <button className="mt-3 mx-4 btn btn-outline-primary">Thêm vào giỏ hàng</button>
                    <h6 className="mt-3 mx-4">Tạm tính: </h6>
                    <h5 className="mt-1 mx-4">{(amount*(book.price-(book.price*book.discount.percent))).toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    })} </h5>
                </div>
            </div>
        </div>
    );
}

export default Detail;