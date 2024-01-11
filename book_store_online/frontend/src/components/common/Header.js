import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/Store";
import {getAllCartById} from "../../redux/middlewares/CartMiddleware";
import {getInfo} from "../../redux/middlewares/UserMiddleware";
import Search from "./Search";

function Header(props) {
    const dispatch=useDispatch();
    const carts=useSelector(store=>store.carts);
    const info=useSelector(store=>store.infos);
    const user = JSON.parse(localStorage.getItem('user'));
    let isUser=false;
    if (!user || user.roles.includes("ROLE_ADMIN")){
        isUser=true;
    }
    useEffect(()=>{
        dispatch(getAllCartById())
        dispatch(getInfo())
    },[])
    return (
        <div className="position-fixed w-100 z-1 top-0">
            <nav className="navbar navbar-expand-lg shadow navbar-light p-0">
                <div className="container">
                    <Link to="/">
                        <img className="logo"
                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                             alt="logo"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                        <div className="input-group">
                            <Search/>
                        </div>
                    </div>
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="ms-auto d-none d-lg-block">
                            <Search/>
                        </div>
                        <ul className="navbar-nav ms-auto ">

                            <li className="nav-item">
                                <a className="nav-link mx-2 text-uppercase" href="#">Thể loại</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-uppercase" href="#">Sách mới</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-uppercase" href="#">Sách giảm giá</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto ">
                            {isUser?null:
                                <li className="nav-item me-5">
                                    <Link to="/cart" className="nav-link text-uppercase"><i
                                        className="bi bi-cart"></i>{carts.length>0?<div className="cart-number">{carts.length}</div>:null}</Link>
                                </li>
                            }

                            {!user ?
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link mb-3 text-uppercase"><i
                                        className="bi bi-person-circle"></i></Link>
                                </li>
                                : <li className="nav-item">
                                    <Link className="nav-link mb-3 text-uppercase" data-bs-toggle="modal" data-bs-target="#logout"><i
                                        className="bi bi-box-arrow-right"></i></Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;