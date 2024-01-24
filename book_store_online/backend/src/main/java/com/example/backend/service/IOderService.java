package com.example.backend.service;

import com.example.backend.model.book.OrderBook;
import com.example.backend.model.book.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

public interface IOderService {
    void createOrder(LocalDateTime date, String code, Long idAccount, String phone, String address,String name);
    void createOrderDetail(Long quantity, Double salePrice, Long idBook, Long idOrder);
    List<OrderBook> showList(Long id);

    List<OrderDetail> showListDetailOrder(Long idOrder);
    OrderBook findOrderBookByCode(String code);
    Long findIdOrderByCode(String code);
    void updateTotalMoney(Double totalMoney,Long id);

}
