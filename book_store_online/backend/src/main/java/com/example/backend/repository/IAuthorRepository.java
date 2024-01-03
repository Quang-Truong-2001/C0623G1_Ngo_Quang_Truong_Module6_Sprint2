package com.example.backend.repository;

import com.example.backend.model.book.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAuthorRepository extends JpaRepository<Author, Long> {

}
