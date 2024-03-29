import React, {useEffect, useState} from 'react';
import * as orderService from "../../services/OrderService";
import AccessDenied from "../errors/AccessDenied";
import {Link, useParams} from "react-router-dom";

function OrderDetail(props) {
    const id = props.idOrder;
    const [list, setList] = useState([]);
    const getAllOrder = async () => {
        let res = await orderService.getAllDetailOrder(id);
        if (res.status === 200) {
            setList(res.data);
        } else {
            setList([]);
        }

    }
    useEffect(() => {
        getAllOrder();
    }, [])
    return (
        <>
            <tr>
                <th scope="col-2"></th>
                <th scope="col-2">Tên sách</th>
                <th scope="col">Số lượng</th>
                <th scope="col"></th>
                <th scope="col">Thành tiền</th>
            </tr>
            {list.map((item, index) => (
                <tr key={item.id}>
                    <td>
                        <Link to={`/detail/${item.book.id}`} className="btn btn-detail mb-3 rounded-2"><img
                            src={item.book.image}
                            alt=""/></Link>
                    </td>
                    <td>
                        {item.book.name}
                    </td>
                    <td>
                        {item.quantity}
                    </td>
                    <td></td>
                    <td>
                        {(item.salePrice * item.quantity).toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND'
                        })}
                    </td>
                </tr>
            ))}
        </>
    );
}

export default OrderDetail;