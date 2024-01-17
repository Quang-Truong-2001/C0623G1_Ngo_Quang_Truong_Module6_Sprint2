package com.example.backend.dto.order;

import java.util.List;
import java.util.Set;

public class OrderDto {
    private Long idAccount;
    private String address;
    private String phone;
    private Set<Long> list;

    public OrderDto() {
    }

    public Long getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(Long idAccount) {
        this.idAccount = idAccount;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Set<Long> getList() {
        return list;
    }

    public void setList(Set<Long> list) {
        this.list = list;
    }
}
