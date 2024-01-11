import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as bookService from "../../services/BookService"
import Carousel from "./Carousel";

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
                                    <p className="text-danger mb-3 rounded-2"> <span className="me-2 text-dark rounded-2 text-decoration-line-through">{item.price.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })}</span>{item.salePrice.toLocaleString('vi', {
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