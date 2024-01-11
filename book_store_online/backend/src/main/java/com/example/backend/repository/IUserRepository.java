package com.example.backend.repository;

import com.example.backend.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserRepository extends JpaRepository<User,Long> {
    @Query(value = "select * from users where account_id= :idAccount", nativeQuery = true)
    User getInfoUser(@Param("idAccount") Long id);
}
