package com.example.backend.service.impl;

import com.example.backend.model.book.OrderBook;
import com.example.backend.model.book.OrderDetail;
import com.example.backend.repository.IOrderDetailRepository;
import com.example.backend.repository.IOrderRepository;
import com.example.backend.service.IOderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl implements IOderService {
    @Autowired
    private IOrderRepository repository;
    @Autowired
    private IOrderDetailRepository orderDetailRepository;


    @Override
    public void createOrder(LocalDateTime date, String code, Long idAccount, String phone, String address, String name) {
        repository.createOrder(date, code, idAccount,phone, address,name);
    }

    @Override
    public void createOrderDetail(Long quantity, Double salePrice, Long idBook, Long idOrder) {
        repository.createOrderDetail(quantity, salePrice, idBook, idOrder);
    }

    @Override
    public List<OrderBook> showList(Long id) {
        return repository.showList(id);
    }

    @Override
    public List<OrderDetail> showListDetailOrder(Long idOrder) {
        return orderDetailRepository.showListDetailOrder(idOrder);
    }

    @Override
    public OrderBook findOrderBookByCode(String code) {
        return repository.findByCode(code);
    }

    @Override
    public Long findIdOrderByCode(String code) {
        return repository.findIdOrderByCode(code);
    }

    @Override
    public void updateTotalMoney(Double totalMoney, Long id) {
        repository.updateTotalMoney(totalMoney, id);
    }
}
