package com.example.backend.repository;

import com.example.backend.model.book.OrderBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;

public interface IOrderRepository extends JpaRepository<OrderBook, Long> {
    @Modifying
    @Transactional
    @Query(value = "insert into orders(date_buy,account_id, address) values(:date,:idAccount,:address)", nativeQuery = true)
    void createOrder(@Param("date") Date date,@Param("date") Long idAccount,@Param("address") String address);

    @Modifying
    @Transactional
    @Query(value = "insert into order_details(quantity,sale_price, book_id,order_id) values(:quantity,:salePrice,:idBook,:idOrder)", nativeQuery = true)
    void createOrderDetail(@Param("quantity") Long quantity,@Param("salePrice") Long salePrice,@Param("idBook") Long idBook,@Param("idOrder") Long idOrder);
}
