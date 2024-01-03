package com.example.backend.dto;

public interface IBookDto {
    Long getId();
    String getName();
    String getIntro();
    String getContent();
    Long getQuantity();
    Double getPrice();
    String getNameAuthor();
}
