package com.ty.Doctors.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ty.Doctor.entity.Doctors;


public interface DoctorsRepository extends JpaRepository<Doctors, Integer> {

	List<Doctors> findByNameContainingIgnoreCase(String name);
	
}
