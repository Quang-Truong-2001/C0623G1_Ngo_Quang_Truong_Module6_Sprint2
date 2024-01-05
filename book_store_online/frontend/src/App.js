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



function App() {
    return (
        <>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/manage" element={<ManagerStore/>}/>
                </Routes>
            </div>
            <Footer/>
            <ToastContainer/>
        </>

    );
}

export default App;
