package com.example.backend.dto;

import com.example.backend.model.auth.Role;

import java.util.HashSet;
import java.util.Set;

public class AccountDto {
    private Long id;
    private String username;
    private String password;
    private Set<Role> roles=new HashSet<>();

    public AccountDto() {
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


    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
