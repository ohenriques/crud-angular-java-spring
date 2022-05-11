package com.paulohs.crudspring.controller;

import java.util.List;

import com.paulohs.crudspring.model.Course;
import com.paulohs.crudspring.repository.CourseRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private CourseRepository courseRepository;

    // Construtor está sendo gerado via lombok
    // public CourseController(CourseRepository courseRepository) {
    // this.courseRepository = courseRepository;
    // }

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

}
