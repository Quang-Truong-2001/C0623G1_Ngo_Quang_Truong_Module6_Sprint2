import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import * as bookService from "../../services/BookService"
import * as categoryService from "../../services/CategoryService"
import Carousel from "./Carousel";
import {Slider} from "@mui/material";
import {toast} from "react-toastify";
import {addCartMiddle, getAllCartById} from "../../redux/middlewares/CartMiddleware";
import {getInformation} from "../../redux/middlewares/UserMiddleware";
import {useDispatch} from "react-redux";
function Home(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const [value, setValue] = useState([0, 500]);
    const [min,setMin]=useState(0);
    const [max,setMax]=useState(500);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [page,setPage]=useState(0);
    const [totalPage,setTotalPage]=useState(0);
    const [listCategory,setListCategory]=useState([]);
    const [category,setCategory]=useState("");
    const [is,setIs]=useState(false);
    const handleChange = (e, newValue) => {
        setValue(newValue);
        setMin(e.target.value[0]);
        setMax(e.target.value[1]);
        setPage(0);
    };

    const handleChangeMin=(e)=>{
        setMin(e.target.value);
        setValue([e.target.value,max]);
        setPage(0);
    }
    const handleChangeMax=(e)=>{
        setMax(e.target.value);
        setValue([min,e.target.value]);
    }
    const handleChangeName=(e)=>{
        if(e.target.value!=="`"){
            setName(e.target.value);
            setPage(0);
        } else {
            toast.error("Vui lòng nhập đúng tên sách!")
        }
    }
    const handleChangeAuthor=(e)=>{
        if(e.target.value!=="`"){
            setAuthor(e.target.value);
            setPage(0);
        } else {
            toast.error("Vui lòng nhập đúng tên tác giả!")
        }

    }
    const handleChangeCategory=(e)=>{
        if(e.target.value!=="`"){
            setCategory(e.target.value);
        } else {
            toast.error("Lỗi")
        }
    }
    const valuetext=()=>`${value}`;
    const getListCategory=async ()=>{
        let res=await categoryService.getAllCategory();
        setListCategory(res);
    }
    const getAllBook = async () => {
        let res = await bookService.getAllBookBySearch(name,author,min*1000,max*1000,page,category);
        if(res.status===200){
            setList(res.data.content);
            setTotalPage(res.data.totalPages);
        }else {
            setList([]);
            setTotalPage(0);
            setPage(0);
        }
    }
    const createCart = (value) => {
        if (!user) {
            toast.warning("Bạn cần đăng nhập");
            navigate("/login");
        } else {
            let cart;
            cart = {quantity: 1, idAccount: user.id, idBook: value.id,salePrice: value.salePrice}
            dispatch(addCartMiddle(cart));
            dispatch(getAllCartById());
            toast.success("Thêm vào giỏ hàng thành công");
        }
    }
    const resetValue=()=>{
        setPage(0);
        setName("");
        setCategory("");
        setMin(0);
        setMax(500);
        setAuthor("");
    }
    useEffect(() => {
        getAllBook();
    }, [name,author,min,max,page,category])
    useEffect(() => {
        getListCategory();
        dispatch(getAllCartById());
        dispatch(getInformation());
    }, [])
    return (
        <>
            <div className="list-book row m-0">
                <Carousel/>
                <div className="search-area col-xl-2 col-md-12 col-xxl-2 col-sm-12 col-lg-2 mb-5">
                    <div className="bg-white rounded-2 ms-2 mt-2 shadow border-search">
                        <div className="p-2">
                            <div className="mx-2 my-4">
                                <label className="ms-1 mb-1">Tên sách: </label>
                                <input className="big-input form-control" value={name} onChange={handleChangeName}/>
                            </div>
                            <div className="mx-2 my-4">
                                <label className="ms-1 mb-1">Tác giả: </label>
                                <input className="big-input form-control" value={author} onChange={handleChangeAuthor}/>
                            </div>
                            <div className="mx-2 my-4">
                                <label className="ms-1 mb-1">Thể loại </label>
                                <select onChange={handleChangeCategory} className="form-control">
                                    <option value="">Chọn thể loại</option>
                                    {listCategory.map(item=>(
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mx-2 my-4">
                                <label className="ms-1 mt-2 mb-1">Mức giá: (nghìn đồng) </label>
                                <div className="d-flex justify-content-around price-input">
                                    <input className="form-control" value={min} onChange={handleChangeMin}  type="number"/>
                                    <input className="form-control" value={max} onChange={handleChangeMax} type="number"/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Slider
                                        className="w-75 slider"
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        step={1}
                                        min={0}
                                        max={500}
                                    />
                                </div>
                            </div>
                            {/*<div className="mx-2 my-4">*/}
                            {/*    <button onClick={resetValue} className="btn btn-detail w-100">Đặt lại</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="col-xl-10 col-md-12 col-xxl-10 col-sm-12 col-lg-10">
                    {list.length===0?

                        <div className="d-flex justify-content-center align-content-center" style={{height:"500px"}}>
                            <div>
                                <h5>Không tìm thấy</h5>
                            </div>
                        </div>

                        :
                        <>
                            <div className="row">
                                {list.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-xl-3">
                                        <div className="card shadow m-2 text-center rounded-2">
                                            <Link  to={`/detail/${item.id}`} ><img style={{width:"90%"}} className="rounded-2 mt-3"
                                                                                   src={item.image}
                                                                                   alt=""/></Link>

                                            <p className="mt-3 fw-medium">{item.name}</p>
                                            <div className="d-flex justify-content-around">
                                                <p className="text-danger mb-3 rounded-2"> <span className="me-2 text-dark rounded-2 text-decoration-line-through">{item.price.toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}</span>{item.salePrice.toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}</p>
                                                <button className="btn btn-detail mb-3 rounded-2" onClick={()=>createCart(item)}>
                                                    + <i className="bi bi-cart"></i></button>
                                                {/*<Link to={`/detail/${item.id}`} className="btn btn-detail mb-3 rounded-2">Chi*/}
                                                {/*    tiết</Link>*/}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="my-4">
                                <div className="d-flex justify-content-center">
                                    {page===0?
                                        <button className="btn-pagination"><i className="bi bi-arrow-left"></i></button>:
                                        <button className="btn-pagination" onClick={()=>setPage(page-1)}><i className="bi bi-arrow-left"></i></button>
                                    }
                                    <button className="btn-pagination mx-2">{page+1}</button>
                                    {page===(totalPage-1)?null:
                                        <button className="btn-pagination"  onClick={()=>setPage(page+1)}><i className="bi bi-arrow-right"></i></button>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>

            </div>
        </>
    );
}

export default Home;