package com.paulohs.crudspring;

import com.paulohs.crudspring.model.Course;
import com.paulohs.crudspring.repository.CourseRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
		System.out.println("Aplicação iniciada!");
	}

	@Bean
	CommandLineRunner initDataBase(CourseRepository courserRepository) {
		return args -> {
			courserRepository.deleteAll();
			Course c = new Course();
			c.setName("Angular com Spring Boot");
			c.setCategory("Front-end");
			courserRepository.save(c);
		};

	}

}
