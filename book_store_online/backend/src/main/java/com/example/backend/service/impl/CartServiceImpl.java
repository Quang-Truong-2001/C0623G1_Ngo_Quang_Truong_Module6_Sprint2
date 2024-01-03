package com.example.backend.service.impl;

import com.example.backend.model.cart.Cart;
import com.example.backend.repository.ICartRepository;
import com.example.backend.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CartServiceImpl implements ICartService {
    @Autowired
    private ICartRepository repository;

    @Override
    public List<Cart> showList(Long id) {
        return repository.showList(id);
    }

    @Override
    public void saveCart(Cart cart) {
        repository.save(cart);
    }

    @Override
    public void deleteCart(Long id) {
        repository.deleteCart(id);
    }

    @Override
    public Cart findCartById(Long id) {
        return repository.findCartById(id);
    }

    @Override
    public void updateCart(Long id, Long quantity) {
        repository.updateCart(id, quantity);
    }
}
