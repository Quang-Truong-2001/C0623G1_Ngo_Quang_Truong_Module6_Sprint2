import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as bookService from "../services/BookService"

function Home(props) {
    const [list, setList] = useState([]);
    const getAllBook = async () => {
        let res = await bookService.getAllBook();
        setList(res.data.content);
    }
    useEffect(() => {
        getAllBook();
    }, [])

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
                    {list.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xl-3">
                            <div className="card shadow m-2 text-center rounded-2">
                                <img className="rounded-2 mt-3"
                                     src={item.image}
                                     alt=""/>
                                <p className="mt-3 fw-medium">{item.name}</p>
                                <div className="d-flex justify-content-around">
                                    <p className="text-danger mb-3 rounded-2">{(item.price - (item.price * item.discountPercent)).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })}</p>
                                    <Link to={`/detail/${item.id}`} className="btn btn-primary mb-3 rounded-2">Chi
                                        tiết</Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Home;