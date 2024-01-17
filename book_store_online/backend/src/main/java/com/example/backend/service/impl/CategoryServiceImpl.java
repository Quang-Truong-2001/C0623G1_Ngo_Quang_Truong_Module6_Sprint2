package com.example.backend.service.impl;

import com.example.backend.model.book.Category;
import com.example.backend.repository.ICategoryRepository;
import com.example.backend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> showListCategory() {
        return categoryRepository.findAll();
    }
}
