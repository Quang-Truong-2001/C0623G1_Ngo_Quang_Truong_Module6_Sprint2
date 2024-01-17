package com.example.backend.controller;

import com.example.backend.dto.CartDto;
import com.example.backend.dto.order.OrderDto;
import com.example.backend.model.cart.Cart;
import com.example.backend.service.IAccountService;
import com.example.backend.service.IBookService;
import com.example.backend.service.ICartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService service;
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IBookService bookService;
    @Autowired
    private ICartService cartService;

    @GetMapping("/{id}")
    public ResponseEntity<?> showList(@PathVariable("id") Long id) {
        List<Cart> list = service.showList(id);
        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCart(@RequestBody CartDto cartDto) {
        Cart cart = service.findCartByIdAccountAndIdBook(cartDto.getIdAccount(), cartDto.getIdBook());
        if (cart == null) {
            cart = new Cart();
            BeanUtils.copyProperties(cartDto, cart);
            cart.setAccount(accountService.findAccountById(cartDto.getIdAccount()));
            cart.setBook(bookService.findBookById(cartDto.getIdBook()));
            cart.setSalePrice(cartDto.getSalePrice());
            cart.setDelete(false);
            if (cart.getQuantity() > cart.getBook().getQuantity()) {
                cart.setQuantity(cart.getBook().getQuantity());
            }
        } else {
            Long quantity = cart.getQuantity() + cartDto.getQuantity();
            if (quantity > cart.getBook().getQuantity()) {
                quantity = cart.getBook().getQuantity();
            }
            cart.setQuantity(quantity);
        }
        service.saveCart(cart);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable("id") Long id) {
        Cart cart = service.findCartById(id);
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        service.deleteCart(id);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateQuantity(@RequestBody CartDto cartDto) {
        Cart cart = service.findCartById(cartDto.getId());
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        service.updateCart(cartDto.getId(), cartDto.getQuantity());
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PostMapping("/calculate")
    public ResponseEntity<?> calculate(@RequestBody OrderDto orderDto) {
        Cart cart;
        Double totalMoney = 0.0;
        try {
            for (Long o : orderDto.getList()) {
                cart = cartService.findCartById(o);
                totalMoney = totalMoney+ cart.getSalePrice() * cart.getQuantity();
            }
        } catch (Exception e){
            System.out.println(e);
        }
        return new ResponseEntity<>(totalMoney, HttpStatus.OK);
    }
}
