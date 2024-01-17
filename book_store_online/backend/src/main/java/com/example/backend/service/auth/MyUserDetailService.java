package com.example.backend.service.auth;

import com.example.backend.model.auth.Account;
import com.example.backend.model.auth.MyUserDetail;
import com.example.backend.repository.IAccountRepository;
import com.example.backend.repository.IAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account=accountRepository.findByUsername(username);
        return new MyUserDetail(account);
    }
}
