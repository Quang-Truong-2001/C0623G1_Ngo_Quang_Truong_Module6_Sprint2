package com.example.backend.controller;

import com.example.backend.dto.book.BookDto;
import com.example.backend.dto.book.IBookDto;
import com.example.backend.model.book.Book;
import com.example.backend.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/book")
public class BookController {
    @Autowired
    private IBookService bookService;

    @GetMapping("/list")
    public ResponseEntity<?> showList(
            @RequestParam(value = "page", defaultValue = "0", required = false) Integer page,
            @RequestParam(value = "name", defaultValue = "", required = false) String name,
            @RequestParam(value = "author", defaultValue = "", required = false) String author,
            @RequestParam(value = "min", defaultValue = "0", required = false) String minPrice,
            @RequestParam(value = "max", defaultValue = "10000000000", required = false) String maxPrice,
            @RequestParam(value = "category", defaultValue = "", required = false) String category
    ) {
        Pageable pageable = PageRequest.of(page, 8);
        Page<IBookDto> list = bookService.showList(pageable, trim(name), trim(author), trim(minPrice), trim(maxPrice), category);
        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    private String trim(String string){
        return string.trim();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        Book book = bookService.findBookById(id);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookService.deleteBook(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findBookById(@PathVariable("id") Long id) {
        Book book = bookService.findBookById(id);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@RequestBody BookDto bookDto) {
        Book book = new Book();
        BeanUtils.copyProperties(bookDto, book);
        book.setAuthor(bookService.findAuthorById(bookDto.getIdAuthor()));
        book.setDelete(false);
        bookService.createBook(book);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateBook(@RequestBody BookDto bookDto) {
        Book book = new Book();
        BeanUtils.copyProperties(bookDto, book);
        book.setAuthor(bookService.findAuthorById(bookDto.getIdAuthor()));
        bookService.updateBook(book);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/best_seller")
    public ResponseEntity<?> showListBookBestSeller(@RequestParam(value = "page", defaultValue = "0", required = false) Integer page) {
        Pageable pageable = PageRequest.of(page, 8);
        return new ResponseEntity<>(bookService.showListBestSell(pageable), HttpStatus.OK);
    }

    @GetMapping("/discount")
    public ResponseEntity<?> showListDiscountBook(@RequestParam(value = "page", defaultValue = "0", required = false) Integer page) {
        Pageable pageable = PageRequest.of(page, 8);
        return new ResponseEntity<>(bookService.showListDiscountBook(pageable), HttpStatus.OK);
    }



}
