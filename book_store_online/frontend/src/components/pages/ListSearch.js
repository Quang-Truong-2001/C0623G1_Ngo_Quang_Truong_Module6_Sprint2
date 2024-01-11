import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import * as bookService from "../../services/BookService"

function ListSearch(props) {
    const [list, setList] = useState([]);
    const [searchParams] = useSearchParams();
    const [keyword,setKeyword] = useState(searchParams.get("keyword"));
    console.log(keyword)
    const getAllBookBySearch=async ()=>{
        let res=await bookService.getAllBookBySearch(keyword);
        if(res.status===200){
            setList(res.data.content);
        } else {
            setList([]);
        }


    }
    useEffect(()=>{
        getAllBookBySearch();
    },[]);
    return (
        <div className="list-book p-3">
            <p className="fs-4 text-center">Danh sách tìm kiếm</p>
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
    );
}

export default ListSearch;