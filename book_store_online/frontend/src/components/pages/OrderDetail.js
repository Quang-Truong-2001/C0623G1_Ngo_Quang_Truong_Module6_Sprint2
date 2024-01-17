import React, {useEffect, useState} from 'react';
import * as orderService from "../../services/OrderService";
import AccessDenied from "../errors/AccessDenied";
import {Link, useParams} from "react-router-dom";

function OrderDetail(props) {
    const id = props.idOrder;
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    const getAllOrder = async () => {
        let res = await orderService.getAllDetailOrder(id, page);
        console.log(res)
        if (res.status === 200) {
            setList(res.data.content);
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
                        <img
                            src={item.book.image}
                            alt=""/>

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