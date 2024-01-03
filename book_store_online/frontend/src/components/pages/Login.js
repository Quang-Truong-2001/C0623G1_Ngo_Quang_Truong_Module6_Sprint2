import React from 'react';

function Login(props) {
    return (
        <div className="login gradient-form my-5">
            <div className="container p-2">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"/>
                                                <h4 className="mt-1 mb-5 pb-1">Quang Truong Book Store</h4>
                                        </div>

                                        <form>
                                            <p>Đăng nhập vào tài khoản của bạn</p>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Tên tài
                                                    khoản</label>
                                                <input type="email" id="form2Example11" className="form-control"
                                                       placeholder="Nhập tên tài khoản"/>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example22">Mật khẩu</label>
                                                <input type="password" id="form2Example22" placeholder="Nhập mật khẩu"
                                                       className="form-control"/>
                                            </div>

                                            <div className="row">
                                                <button
                                                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4 px-3"
                                                    type="button">Đăng nhập
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Quang Truong Book Store</h4>
                                        <p className="small mb-0">Chào mừng bạn đến với cửa hàng của chúng tôi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;