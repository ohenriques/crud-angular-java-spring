package com.paulohs.crudspring.controller;

import java.util.List;

import com.paulohs.crudspring.model.Course;
import com.paulohs.crudspring.repository.CourseRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {
        return courseRepository.save(course);
        // public ResponseEntity<Course> create(@RequestBody Course course) {
        // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(courseRepository.save(course));
    }

    @GetMapping("/course/{id}")
    public Course findById(@PathVariable(value = "id") Long id) {
        return courseRepository.findById(id).get();
    }

    @GetMapping("/course/name/{name}")
    public Course findByName(@PathVariable(value = "name") String name) {
        return courseRepository.findByName(name);
    }

    @DeleteMapping("/course/{id}")
    public void deleteById(@PathVariable(value = "id") Long id) {
        courseRepository.deleteById(id);
    }

    @PutMapping("/course/{id}")
    public Course putUpdate(@PathVariable(value = "id") Long id, @RequestBody Course course) {
        Course c = findById(id);
        c.setName(course.getName());
        c.setCategory(course.getCategory());
        return courseRepository.save(c);
    }

    @PatchMapping("/course/{id}")
    public Course patchUpdate(@PathVariable(value = "id") Long id, @RequestBody Course course) {
        Course c = findById(id);
        c.setName(course.getName());
        c.setCategory(course.getCategory());
        return courseRepository.save(c);
    }
}
