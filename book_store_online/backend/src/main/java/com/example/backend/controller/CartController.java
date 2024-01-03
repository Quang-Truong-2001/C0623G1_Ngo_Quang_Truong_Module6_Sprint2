package com.example.backend.controller;

import com.example.backend.dto.CartDto;
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
    @GetMapping("/{id}")
    public ResponseEntity<?> showList(@PathVariable("id") Long id){
        List<Cart> list=service.showList(id);
        if(list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createCart(@RequestBody CartDto cartDto){
        Cart cart=new Cart();
        BeanUtils.copyProperties(cartDto,cart);
        cart.setAccount(accountService.findAccountById(cartDto.getIdAccount()));
        cart.setBook(bookService.findBookById(cartDto.getIdBook()));
        cart.setDelete(false);
        service.saveCart(cart);
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable("id") Long id){
        Cart cart=service.findCartById(id);
        if (cart==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        service.deleteCart(id);
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }
    @PatchMapping("/update_quantity")
    public ResponseEntity<?> updateQuantity(@RequestParam("id") Long id,@RequestParam("quantity") Long quantity){
        Cart cart=service.findCartById(id);
        if (cart==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        service.updateCart(id, quantity);
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }


}
