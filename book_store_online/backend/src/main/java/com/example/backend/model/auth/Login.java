package com.example.backend.model.auth;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import jakarta.validation.executable.ExecutableValidator;
import jakarta.validation.metadata.BeanDescriptor;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Set;

public class Login implements Validator {
    @NotBlank(message = "Trường username không được để trống.")
    @NotNull(message = "Trường username không được null")
    @Pattern(regexp = "^[a-zA-Z0-9_]+$",message = "Chỉ được chứa ký tự alphabet, số và dấu gạch dưới")
    @Size(min = 8,message = "Username phải trên 8 kí tự")
    @Size(max = 100,message = "Username phải ít hơn 100 ký tự")
    private String username;
    @NotBlank(message = "Trường password không được để trống.")
    @NotNull(message = "Trường password không được null")
    @Size(min = 8,message = "Mật khẩu phải trên 8 kí tự")
    @Size(max = 100,message = "Mật khẩu phải ít hơn 100 ký tự")
    private String password;

    public Login() {
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


    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
