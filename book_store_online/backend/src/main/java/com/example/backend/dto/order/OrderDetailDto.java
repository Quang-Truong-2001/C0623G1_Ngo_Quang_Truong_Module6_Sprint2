package com.example.backend.dto.order;

import com.example.backend.model.book.Book;
import com.example.backend.model.book.OrderBook;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class OrderDetailDto {
    private Long id;
    private Long quantity;
    private Long idOrderBook;
    private Long idBook;
    private Double salePrice;

    public OrderDetailDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Long getIdOrderBook() {
        return idOrderBook;
    }

    public void setIdOrderBook(Long idOrderBook) {
        this.idOrderBook = idOrderBook;
    }

    public Long getIdBook() {
        return idBook;
    }

    public void setIdBook(Long idBook) {
        this.idBook = idBook;
    }

    public Double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(Double salePrice) {
        this.salePrice = salePrice;
    }
}
