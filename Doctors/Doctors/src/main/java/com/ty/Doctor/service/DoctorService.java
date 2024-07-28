package com.ty.Doctor.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ty.Doctor.entity.Doctors;
import com.ty.Doctors.repository.DoctorsRepository;

@Service
public class DoctorService implements Doc_service {
    @Autowired
    private DoctorsRepository doctorsRepository;

    @Override
    public List<Doctors> getDoctor() {
        return doctorsRepository.findAll();
    }

    @Override
    public Optional<Doctors> getUserById(int id) {
        return doctorsRepository.findById(id);
    }
}
