package com.example.backend.service.impl;

import com.example.backend.repository.IOrderRepository;
import com.example.backend.service.IOderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
@Service
public class OrderServiceImpl implements IOderService {
    @Autowired
    private IOrderRepository repository;
    @Override
    public void createOrder(Date date, Long idAccount, String address) {
        repository.createOrder(date, idAccount, address);
    }

    @Override
    public void createOrderDetail(Long quantity, Long salePrice, Long idBook, Long idOrder) {
        repository.createOrderDetail(quantity, salePrice, idBook, idOrder);
    }
}
