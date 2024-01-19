import React, {useEffect, useState} from 'react';
import * as bookService from "../../services/BookService";
import {Link} from "react-router-dom";

function Discount(props) {
    const [list, setList] = useState([]);
    const [page,setPage]=useState(0);
    const [totalPage,setTotalPage]=useState(0);
    const getAllBookBySearch=async ()=>{
        let res=await bookService.getAllBookDiscountSeller(page);
        if(res.status===200){
            setList(res.data.content);
            setTotalPage(res.data.totalPages);
        } else {
            setList([]);
            setTotalPage(0);
        }


    }
    useEffect(()=>{
        getAllBookBySearch();
    },[page]);
    return (
        <div className="list-book p-3">
            <p className="fs-4 text-center">Sách giảm giá</p>
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
                                <Link to={`/detail/${item.id}`} className="btn btn-detail mb-3 rounded-2">Chi
                                    tiết</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="my-4">
                <div className="d-flex justify-content-center">
                    {page===0?null:
                        <button className="btn-pagination" onClick={()=>setPage(page-1)}><i className="bi bi-arrow-left"></i></button>
                    }
                    <button className="btn-pagination mx-2">{page+1}</button>
                    {page===(totalPage-1)?null:
                        <button className="btn-pagination"  onClick={()=>setPage(page+1)}><i className="bi bi-arrow-right"></i></button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Discount;