import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer text-center text-lg-start text-muted w-100">
            <div className="container text-center text-md-start">
                <div className="row pt-4">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 col-lg-5">

                        <div className="d-flex justify-content-center">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Quang Truong Book Store
                            </h6>
                        </div>
                            <div className="d-flex justify-content-center">
                            <Link to="/">
                                <img className="logo-footer" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                     alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 col-lg-5 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase text-center fw-bold mb-4">Liên hệ</h6>
                        <p><i className="bi bi-house"></i>251 Đống Đa, Hải Châu, Đà Nẵng   </p>
                        <p><i className="bi bi-envelope"></i>quangtruongbookstore@gmail.com</p>
                        <p><i className="bi bi-telephone"></i>0847211345</p>
                        <p><i className="bi bi-telephone"></i>0999991345</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;