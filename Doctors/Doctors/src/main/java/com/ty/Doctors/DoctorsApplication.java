package com.ty.Doctors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.ty.Doctor.entity")
public class DoctorsApplication {
    public static void main(String[] args) {
        SpringApplication.run(DoctorsApplication.class, args);
    }
}
