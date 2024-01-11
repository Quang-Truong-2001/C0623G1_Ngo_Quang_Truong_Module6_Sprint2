import React, {useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {loginUser} from "../../redux/middlewares/AuthMiddleware";
import {useDispatch} from "react-redux";


function Login(props) {
    const [disableSubmit, setDisableSubmit] = useState(false);
    const dispatch = useDispatch();
    const initValues={
        username: "",
        password: ""
    }

    const validateFormLogin = Yup.object({
        username: Yup.string()
            .required("Vui lòng nhập tên đăng nhập.")
            .min(8,"Tên đăng nhập phải trên 8 kí tự")
            .max(100,"Tên đăng nhập phải dưới 100 kí tự"),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu.")
            .min(8,"Tên đăng nhập phải trên 8 kí tự")
            .max(100,"Tên đăng nhập phải dưới 100 kí tự")
    });
    const handleSubmitFormLogin = async (values,{setFieldError}) => {
        try {
            setDisableSubmit(true);
            await dispatch(loginUser(values));
            toast.success("Đăng nhập thành công !");
            const user = JSON.parse(localStorage.getItem('user'));
            if(user.roles.includes("ROLE_ADMIN")){
                window.location.href = '/manage';
            } else {
                window.location.href = '/';
            }

        } catch (e){
            setDisableSubmit(false);
            setFieldError("password",e.data);
        }

    }
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
                                        <Formik initialValues={initValues}
                                                onSubmit={(values, {setFieldError}) => handleSubmitFormLogin(values, {setFieldError})}
                                                validationSchema={validateFormLogin}>
                                            <Form>
                                                <p>Đăng nhập vào tài khoản của bạn</p>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Tên tài
                                                        khoản</label>
                                                    <Field name="username" type="text" id="form2Example11" className="form-control"
                                                           placeholder="Nhập tên tài khoản"/>
                                                    <ErrorMessage name="username" className="text-danger"
                                                                  component="small"/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example22">Mật khẩu</label>
                                                    <Field name="password" type="password" id="form2Example22" placeholder="Nhập mật khẩu"
                                                           className="form-control"/>
                                                    <ErrorMessage name="password" className="text-danger"
                                                                  component="small"/>
                                                </div>

                                                <div className="row">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-4 px-3" disabled={disableSubmit}
                                                        type="submit">Đăng nhập
                                                    </button>
                                                </div>

                                            </Form>
                                        </Formik>

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