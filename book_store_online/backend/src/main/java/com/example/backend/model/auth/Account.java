package com.example.backend.model.auth;

import com.example.backend.model.book.OrderBook;
import com.example.backend.model.cart.Cart;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<AccountRole> accountRoles;

    @OneToOne(mappedBy = "account")
    private User user;

    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<OrderBook> books;

    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<Cart> carts;

    public Account() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<AccountRole> getAccountRoles() {
        return accountRoles;
    }

    public void setAccountRoles(Set<AccountRole> accountRoles) {
        this.accountRoles = accountRoles;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setBooks(Set<OrderBook> books) {
        this.books = books;
    }

    public void setCarts(Set<Cart> carts) {
        this.carts = carts;
    }

    public Set<OrderBook> getBooks() {
        return books;
    }

    public Set<Cart> getCarts() {
        return carts;
    }
}
