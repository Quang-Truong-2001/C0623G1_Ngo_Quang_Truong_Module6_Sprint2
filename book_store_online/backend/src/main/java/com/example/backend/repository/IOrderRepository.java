package com.example.backend.repository;

import com.example.backend.controller.OrderController;
import com.example.backend.model.book.OrderBook;
import com.example.backend.model.book.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

public interface IOrderRepository extends JpaRepository<OrderBook, Long> {
    @Modifying
    @Transactional
    @Query(value = "insert into orders(code,date_buy,account_id,phone, address,name) values(:code,:date,:idAccount,:phone,:address,:name)", nativeQuery = true)
    void createOrder(@Param("date") LocalDateTime date, @Param("code") String code, @Param("idAccount") Long idAccount, @Param("phone") String phone, @Param("address") String address,@Param("name") String name);

    @Modifying
    @Transactional
    @Query(value = "insert into order_details(quantity,sale_price, book_id,order_id) values(:quantity,:salePrice,:idBook,:idOrder)", nativeQuery = true)
    void createOrderDetail(@Param("quantity") Long quantity,@Param("salePrice") Double salePrice,@Param("idBook") Long idBook,@Param("idOrder") Long idOrder);
    @Query(value = "select * from orders where account_id =:id order by date_buy desc", nativeQuery = true)
    List<OrderBook> showList(@Param("id") Long id);

    OrderBook findByCode(String code);
    @Query(value = "select o.id from orders as o where o.code = :code", nativeQuery = true)
    Long findIdOrderByCode(@Param("code") String code);
    @Modifying
    @Transactional
    @Query(value = "update orders set total_money = :totalMoney where id = :id", nativeQuery = true)
    void updateTotalMoney(@Param("totalMoney") Double totalMoney, @Param("id") Long id);

}
