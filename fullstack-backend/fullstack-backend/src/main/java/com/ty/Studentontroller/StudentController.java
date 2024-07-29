package com.ty.Studentontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ty.Student.entity.*;
import com.ty.Student.repository.StudentRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController 
{
	@Autowired
	StudentRepository repo;
	@GetMapping("/getAll")
	public List<Student> getStudents()
	{
		return repo.findAll();
	}@PostMapping("/save")
	public Student saveStudent(@RequestBody Student student) 
	{
		return repo.save(student);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteStudent(@PathVariable int id) {
		repo.deleteById(id);
		return "deleted";
	}
	 @GetMapping("/users/{id}")
	    public String getUserById(@PathVariable int id) {
	        repo.findById(id);
	        return "Updated";
	 }
	@PutMapping("/user/{id}")
	 public Optional<Object> updateUser(@RequestBody Student newUser, @PathVariable int id) {
		        return repo.findById(id)
		                .map(user -> {
		                    user.setName(newUser.getName());
		                    user.setAddress(newUser.getAddress());
		                    user.setAge(newUser.getAge());
		                    user.setContact_No(newUser.getContact_No());
		                    return repo.save(user);
		                });
}
}