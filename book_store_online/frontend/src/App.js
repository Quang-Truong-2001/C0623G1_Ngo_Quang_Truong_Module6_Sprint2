import logo from './logo.svg';
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import Detail from "./components/pages/Detail";
import {ToastContainer} from "react-toastify";
import ManagerStore from "./components/pages/ManagerStore";
import 'react-toastify/dist/ReactToastify.css';
import ModalLogout from "./components/common/ModalLogout";
import BestSeller from "./components/pages/BestSeller";
import Order from "./components/pages/Order";
import OrderDetail from "./components/pages/OrderDetail";
import {NotFound} from "./components/errors/NotFound";
import SuccessPay from "./components/errors/SuccessPay";



function App() {
    return (
        <>
            <Header/>
            <div className="content" style={{minHeight: "58vh"}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/order_detail/:id" element={<OrderDetail/>}/>
                    <Route path="/manage" element={<ManagerStore/>}/>
                    <Route path="/best_seller" element={<BestSeller/>}/>
                    <Route path="/success" element={<SuccessPay/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <ModalLogout/>
            </div>
            <Footer/>
            <ToastContainer/>
        </>

    );
}

export default App;
