package com.example.backend.service;

import com.example.backend.model.cart.Cart;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartService {
    List<Cart> showList(Long id);
    void saveCart(Cart cart);
    void deleteCart(Long id);
    Cart findCartById(Long id);
    void updateCart(Long id,Long quantity);
}
