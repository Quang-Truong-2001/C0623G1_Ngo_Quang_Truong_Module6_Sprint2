package com.example.backend.service.impl;

import com.example.backend.model.auth.Account;
import com.example.backend.repository.IAccountRepository;
import com.example.backend.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements IAccountService {
    @Autowired
    private IAccountRepository repository;
    @Override
    public Account findAccountById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Optional<Account> findByUsername(String username) {
        return repository.findByUsername(username);
    }
}
