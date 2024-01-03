import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <>
            <div className="carousel-manual d-flex justify-content-center pb-5 z-0">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img
                                src="https://image.nhandan.vn/1200x630/Uploaded/2023/tpuoaob/2023_04_14/doc-sach-9398.png.webp"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://curnonwatch.com/blog/wp-content/uploads/2022/07/Sach-hay-ve-cuoc-song-ban-chi-can-song-tot-troi-xanh-tu-an-bai.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cungdocsach.vn/wp-content/uploads/2022/02/Sach-song-tich-cuc-hon.jpg"
                                 className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev z-0" type="button"
                            data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next z-0" type="button"
                            data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="list-book p-3">
                <p className="fs-4 text-center">Sách bán chạy nhất</p>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3">
                        <div className="card shadow m-2 text-center rounded-2">
                            <img className="rounded-2 mt-3"
                                 src="https://salt.tikicdn.com/cache/750x750/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp"
                                 alt=""/>
                                <p className="mt-3 fw-medium">Cây cam ngọt của tôi</p>
                                <div className="d-flex justify-content-around">
                                    <p className="btn btn-outline-danger mb-3 rounded-2">99.000 đ</p>
                                    <Link to="/detail" className="btn btn-danger mb-3 rounded-2">Chi tiết</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;