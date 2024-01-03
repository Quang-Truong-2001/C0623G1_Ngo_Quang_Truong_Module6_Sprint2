package com.example.backend.service;

import com.example.backend.model.Account;
import org.springframework.data.domain.Page;

public interface IAccountService {
    Account findAccountById(Long id);
}
