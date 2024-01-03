package com.example.backend.service;

import com.example.backend.dto.IBookDto;
import com.example.backend.model.book.Author;
import com.example.backend.model.book.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<IBookDto> showList(Pageable pageable, String name, String author, String minPrice, String maxPrice);
    void deleteBook(Long id);
//    void updateBook(String name, String intro,String content, String image,Long quantity,Double price,Long idAuthor,Long id);
    Book findBookById(Long id);

    Author findAuthorById(Long id);
    void createBook(Book book);
    void updateBook(Book book);


}
