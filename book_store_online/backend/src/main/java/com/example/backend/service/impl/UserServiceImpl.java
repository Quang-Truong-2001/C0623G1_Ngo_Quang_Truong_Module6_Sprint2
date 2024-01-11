package com.example.backend.service.impl;

import com.example.backend.model.auth.User;
import com.example.backend.repository.IUserRepository;
import com.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserRepository repository;
    @Override
    public User getInfoUser(Long id) {
        return repository.getInfoUser(id);
    }
}
