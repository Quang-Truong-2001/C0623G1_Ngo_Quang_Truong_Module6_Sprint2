package com.example.backend.service;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;

public interface IOderService {
    void createOrder(Date date, Long idAccount, String address);
    void createOrderDetail(Long quantity, Long salePrice, Long idBook, Long idOrder);
}
