package com.ty.Student.service;

import java.util.List;
import java.util.Optional;


import com.ty.Student.entity.Student;


public interface StudService {


	public Student saveStudent(Student student);
	public List<Student> getStudent();
	public String deleteStudent(int id);
	public Optional<Object> updateUser(Student newUser,int id);
    public String getUserById(int id);

}