package com.ty.Doctor.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ty.Doctor.entity.Doctors;
import com.ty.Doctors.repository.DoctorsRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class DoctorsController {

    @Autowired
    DoctorsRepository repo;

    @GetMapping("/getAll")
    public List<Doctors> getAllDoctors() {
        return repo.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Doctors> getDoctorById(@PathVariable int id) {
        Optional<Doctors> doctor = repo.findById(id);
        return doctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<Doctors> searchDoctorsByName(@RequestParam String name) {
        return repo.findByNameContainingIgnoreCase(name);  // Custom method to be added in the repository
    }
}

