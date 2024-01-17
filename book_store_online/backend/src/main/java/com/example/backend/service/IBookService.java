package com.example.backend.service;

import com.example.backend.dto.book.IBookDto;
import com.example.backend.model.book.Author;
import com.example.backend.model.book.Book;
import com.example.backend.model.book.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBookService {
    Page<IBookDto> showList(Pageable pageable, String name, String author, String minPrice, String maxPrice,String idCategory);
    void deleteBook(Long id);
//    void updateBook(String name, String intro,String content, String image,Long quantity,Double price,Long idAuthor,Long id);
    Book findBookById(Long id);

    Author findAuthorById(Long id);
    void createBook(Book book);
    void updateBook(Book book);

    Page<IBookDto> showListBestSell(Pageable pageable);




}
