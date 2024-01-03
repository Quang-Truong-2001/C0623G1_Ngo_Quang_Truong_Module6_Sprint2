package com.example.backend.repository;

import com.example.backend.model.cart.Cart;
import jakarta.persistence.Cache;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Long> {
    @Query(value = "select * from carts where is_delete = false",nativeQuery = true)
    List<Cart> showList();

    @Modifying
    @Transactional
    @Query(value = "update carts set is_delete = true where id= :id", nativeQuery = true)
    void deleteCart(@Param("id") Long id);
    @Query(value = "select * from carts where is_delete = false and id =:id",nativeQuery = true)
    Cart findCartById(@Param("id") Long id);
}
