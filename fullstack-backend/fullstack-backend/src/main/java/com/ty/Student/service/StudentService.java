package com.ty.Student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ty.Student.repository.StudentRepository;
import com.ty.Student.entity.Student;
@Service
public class StudentService implements StudService{
    @Autowired
    private StudentRepository studentRepository;

	@Override
	public Student saveStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getStudent() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	@Override
	public String deleteStudent(int id) {
		// TODO Auto-generated method stub
		studentRepository.deleteById(id);
		return "Deleted";
	}

	@Override
	public Optional<Object> updateUser(Student newUser, int id) {
		// TODO Auto-generated method stub
		return studentRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setAddress(newUser.getAddress());
                    user.setAge(newUser.getAge());
                    user.setContact_No(newUser.getContact_No());
                    return studentRepository.save(user);
                });

	}

	@Override
	public String getUserById(int id) {
		// TODO Auto-generated method stub
		studentRepository.findById(id);
		return "updated";
	}

	
	
}