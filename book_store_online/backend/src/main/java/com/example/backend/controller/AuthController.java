package com.example.backend.controller;

import com.example.backend.config.JwtUtils;
import com.example.backend.model.auth.JwtResponse;
import com.example.backend.model.auth.Login;
import com.example.backend.model.auth.MyUserDetail;
import com.example.backend.service.auth.MyUserDetailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private MyUserDetailService myUserDetailService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login login){
        try {
            myUserDetailService.loadUserByUsername(login.getUsername());
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword()));


            SecurityContextHolder.getContext().setAuthentication(authentication);
            MyUserDetail myUserDetail= (MyUserDetail) authentication.getPrincipal();

            JwtResponse jwtResponse=new JwtResponse();
            BeanUtils.copyProperties(myUserDetail.getAccount(),jwtResponse);
            String jwt=jwtUtils.createToken((MyUserDetail) authentication.getPrincipal());
            jwtResponse.setAccessToken(jwt);

            List<String> roles=myUserDetail.getAuthorities().stream()
                    .map(item->item.getAuthority())
                    .collect(Collectors.toList());
            jwtResponse.setRoles(roles);
            return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.NOT_FOUND);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.NOT_FOUND);
        } catch (Exception e){
            return new ResponseEntity<>("Lỗi",HttpStatus.NOT_FOUND);
        }
    }

}
