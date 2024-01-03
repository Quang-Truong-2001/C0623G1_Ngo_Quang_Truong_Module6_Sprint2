package com.example.backend.service;

import com.example.backend.model.cart.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> showList();
    void saveCart(Cart cart);
    void deleteCart(Long id);
    Cart findCartById(Long id);
}
