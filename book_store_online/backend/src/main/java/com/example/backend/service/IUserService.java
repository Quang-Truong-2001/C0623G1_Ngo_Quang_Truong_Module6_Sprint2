package com.example.backend.service;

import com.example.backend.model.auth.User;

public interface IUserService {
    User getInfoUser(Long id);
}
