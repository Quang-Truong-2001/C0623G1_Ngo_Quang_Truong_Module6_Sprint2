package com.example.backend.repository;

import com.example.backend.model.book.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Long> {
    @Query(value = "select * from order_details where order_id = :id", nativeQuery = true)
    Page<OrderDetail> showListDetailOrder(Pageable pageable, @Param("id") Long idOrder);
}
