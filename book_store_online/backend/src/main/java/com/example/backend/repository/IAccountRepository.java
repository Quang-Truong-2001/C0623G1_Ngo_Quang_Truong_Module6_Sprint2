package com.example.backend.repository;

import com.example.backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account,Long> {
}
