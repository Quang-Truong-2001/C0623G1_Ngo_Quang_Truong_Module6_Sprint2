import React, {useEffect, useState} from 'react';
import * as bookService from "../../services/BookService"
import * as cartService from "../../services/CartService"
import async from "async";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

function Detail(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState();
    const [amount, setAmount] = useState(1);
    const getBookById = async () => {
        let res = await bookService.getBookById(id);
        setBook(res);
    }
    const changeAmountInput = (e) => {
        setAmount(e.target.value * 1);
    }
    const createCart = async () => {
        if (!user) {
            toast.warning("Bạn cần đăng nhập");
            navigate("/login");
        } else {
            let cart;
            if (amount > 0) {
                cart = {quantity: amount, idAccount: user.id, idBook: id, salePrice: book.salePrice}
            } else {
                cart = {quantity: 1, idAccount: user.id, idBook: id}
            }
            let is = await cartService.createNewCart(cart);
            if (is) {
                navigate("/cart")
            }
        }
    }

    useEffect(() => {
        getBookById();
    }, []);
    if (!book) return null;
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
                            <h6 className="ms-1 text-decoration-line-through">{book.price.toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND'
                            })}</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <h5 className="ms-1 text-danger">{book.salePrice.toLocaleString('vi', {
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
                        {amount > 1 ?
                            <button className="btn btn-outline-dark" onClick={() => {
                                setAmount(amount - 1)
                            }}>-</button> :
                            <button className="btn btn-outline-dark disabled">-</button>
                        }
                        <input type="number" style={{width: "fit-content"}} className="form-control mx-2"
                               onChange={changeAmountInput} value={amount.toString()}/>
                        <button className="btn btn-outline-dark" onClick={() => {
                            setAmount(amount + 1)
                        }}>+
                        </button>
                    </div>
                    <button className="mt-3 mx-4 btn btn-buy">Mua ngay</button>
                    <button className="mt-3 mx-4 btn btn-outline-primary" onClick={createCart}>Thêm vào giỏ hàng
                    </button>
                    <h6 className="mt-3 mx-4">Tạm tính: </h6>
                    <h5 className="mt-1 mx-4">{(amount * (book.salePrice)).toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND'
                    })} </h5>
                </div>
            </div>
        </div>
    );
}

export default Detail;