import React from 'react';
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

function Search(props) {
    const navigate = useNavigate();
    const initValue = {
        searchName: ""
    }

    const onSearch = (values) => {
        navigate(`/search?keyword=${values.searchName}`);
    };
    return (
        <Formik initialValues={initValue} onSubmit={(values)=>onSearch(values)}>
            <Form>
                <div className="input-group bg-white rounded-0">
                    <Field name="searchName" type="text" className="form-control rounded-start-2"
                           placeholder="Nhập tên sách cần tìm"/>
                    <button type="submit" className="btn btn-danger btn-find rounded-end-2 "><i
                        className="find bi bi-search mx-2 mt-1"></i></button>
                </div>
            </Form>
        </Formik>

    );
}

export default Search;