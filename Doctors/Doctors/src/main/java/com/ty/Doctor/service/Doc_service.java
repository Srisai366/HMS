package com.ty.Doctor.service;

import java.util.List;
import java.util.Optional;

import com.ty.Doctor.entity.Doctors;





public interface Doc_service {
	public List<Doctors> getDoctor();
	public Optional<Doctors> getUserById(int id);
}
