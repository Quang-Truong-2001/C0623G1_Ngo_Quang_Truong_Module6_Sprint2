package com.example.backend.service;

import com.example.backend.model.auth.Account;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountService {
    Account findAccountById(Long id);
    Account findByUsername(String username);

}
