import React from 'react';

function Cart(props) {
    return (
        <div className="cart row m-0 p-0">
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">
                                <input type="checkbox"/>
                            </td>
                            <td>
                                <img
                                    src="https://salt.tikicdn.com/cache/750x750/ts/product/94/32/30/9e9b8e97c8849dc355060fc422a356aa.jpg.webp"
                                    alt=""/>
                            </td>
                            <td>99.000 đ</td>
                            <td>
                                <div className="d-flex justify-content-center mt-3 mx-4">
                                    <button className="btn btn-outline-dark">-</button>
                                    <button className="btn btn-outline-dark mx-2">1</button>
                                    <button className="btn btn-outline-dark">+</button>
                                </div>
                            </td>
                            <td>99.000 đ</td>

                        </tr>
                        <tr>
                            <td scope="row">
                                <input type="checkbox"/>
                            </td>
                            <td>
                                <img
                                    src="https://salt.tikicdn.com/cache/750x750/ts/product/94/32/30/9e9b8e97c8849dc355060fc422a356aa.jpg.webp"
                                    alt=""/>
                            </td>
                            <td>99.000 đ</td>
                            <td>
                                <div className="d-flex justify-content-center mt-3 mx-4">
                                    <button className="btn btn-outline-dark">-</button>
                                    <button className="btn btn-outline-dark mx-2">1</button>
                                    <button className="btn btn-outline-dark">+</button>
                                </div>
                            </td>
                            <td>99.000 đ</td>

                        </tr>
                        <tr>
                            <td scope="row">
                                <input type="checkbox"/>
                            </td>
                            <td>
                                <img
                                    src="https://salt.tikicdn.com/cache/750x750/ts/product/94/32/30/9e9b8e97c8849dc355060fc422a356aa.jpg.webp"
                                    alt=""/>
                            </td>
                            <td>99.000 đ</td>
                            <td>
                                <div className="d-flex justify-content-center mt-3 mx-4">
                                    <button className="btn btn-outline-dark">-</button>
                                    <button className="btn btn-outline-dark mx-2">1</button>
                                    <button className="btn btn-outline-dark">+</button>
                                </div>
                            </td>
                            <td>99.000 đ</td>

                        </tr>
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
                    <button className="my-3 mx-4 btn btn-buy">Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;