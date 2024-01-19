package com.example.backend.service.impl;

import com.example.backend.dto.book.IBookDto;
import com.example.backend.model.book.Author;
import com.example.backend.model.book.Book;
import com.example.backend.model.book.Category;
import com.example.backend.repository.IAuthorRepository;
import com.example.backend.repository.IBookRepository;
import com.example.backend.repository.ICategoryRepository;
import com.example.backend.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private IBookRepository repository;

    @Autowired
    private IAuthorRepository authorRepository;



    @Override
    public Page<IBookDto> showList(Pageable pageable, String name, String author, String minPrice, String maxPrice, String idCategory) {
        return repository.showList(pageable, "%" + name + "%", "%" + author + "%", minPrice, maxPrice,"%"+idCategory+"");
    }

    @Override
    public void deleteBook(Long id) {
        repository.deleteBook(id);
    }


//    @Override
//    public void updateBook(String name, String intro, String content, String image, Long quantity, Double price, Long idAuthor, Long id) {
//        repository.updateBook(name, intro, content, image, quantity, price, idAuthor, id);
//    }

    @Override
    public Book findBookById(Long id) {
        return repository.findBookById(id);
    }

    @Override
    public Author findAuthorById(Long id) {
        return authorRepository.findById(id).get();
    }

    @Override
    public void createBook(Book book) {
        repository.save(book);
    }

    @Override
    public void updateBook(Book book) {
        repository.save(book);
    }

    @Override
    public Page<IBookDto> showListBestSell(Pageable pageable) {
        return repository.showListBestSell(pageable);
    }

    @Override
    public Page<IBookDto> showListDiscountBook(Pageable pageable) {
        return repository.showListDiscountBook(pageable);
    }


}
