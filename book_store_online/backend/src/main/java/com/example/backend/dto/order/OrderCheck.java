package com.example.backend.dto.order;

import com.example.backend.model.cart.Cart;

import java.util.List;

public class OrderCheck {
    private Boolean is;
    private List<Cart> list;

    public OrderCheck() {
    }

    public Boolean getIs() {
        return is;
    }

    public void setIs(Boolean is) {
        this.is = is;
    }

    public List<Cart> getList() {
        return list;
    }

    public void setList(List<Cart> list) {
        this.list = list;
    }
}
