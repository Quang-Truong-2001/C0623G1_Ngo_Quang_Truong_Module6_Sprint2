package com.example.backend.controller;

import com.example.backend.dto.CartDto;
import com.example.backend.dto.order.OrderDto;
import com.example.backend.model.book.Book;
import com.example.backend.model.book.OrderBook;
import com.example.backend.model.book.OrderDetail;
import com.example.backend.model.cart.Cart;
import com.example.backend.service.IBookService;
import com.example.backend.service.ICartService;
import com.example.backend.service.IOderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOderService service;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IBookService bookService;

    @GetMapping("/list")
    public ResponseEntity<?> showList(@RequestParam("id") Long id, @RequestParam(value = "page", defaultValue = "0",required = false) Integer page){
        Pageable pageable = PageRequest.of(page, 20);
        Page<OrderBook> list=service.showList(pageable,id);
        if(list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @GetMapping("/list/detail")
    public ResponseEntity<Page<OrderDetail>> showListDetail(@RequestParam("id") Long idOrder, @RequestParam(value = "page",defaultValue = "0", required = false) Integer page){
        Pageable pageable= PageRequest.of(page,20);
        Page<OrderDetail> list=service.showListDetailOrder(pageable,idOrder);
        if(list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    public static String generateRandomString() {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 10; i++) {
            int index = random.nextInt(characters.length());
            sb.append(characters.charAt(index));
        }
        return sb.toString();
    }
    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderDto orderDto){
        LocalDateTime date= LocalDateTime.now();
        String code;
        OrderBook orderBook;
        Book book;
        do{
            code=generateRandomString();
            orderBook=service.findOrderBookByCode(code);
        } while (orderBook!=null);
        service.createOrder(date,code,orderDto.getIdAccount(), orderDto.getPhone(), orderDto.getAddress());
        Long id=service.findIdOrderByCode(code);
        Cart cart;
        Double totalMoney = 0.0;
        for(Long o:orderDto.getList()){
            cart=cartService.findCartById(o);
            totalMoney+=cart.getSalePrice()*cart.getQuantity();
            service.createOrderDetail(cart.getQuantity(),cart.getSalePrice(),cart.getBook().getId(),id);
            cartService.deleteCart(o);
            book=bookService.findBookById(cart.getBook().getId());
            book.setQuantity(book.getQuantity()-cart.getQuantity());
            bookService.updateBook(book);
        }
        service.updateTotalMoney(totalMoney,id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
