package com.example.backend.controller;

import com.example.backend.dto.CartDto;
import com.example.backend.service.IOderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private IOderService service;
//    @PostMapping("/create")
//    public ResponseEntity<?> createOrder(@RequestBody Set<CartDto> list){
//
//    }
}
