package com.ty.Doctor.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name = "doctors")
public class Doctors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String specialization;
    private int no_of_years_of_experience;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public int getNo_of_years_of_experience() {
		return no_of_years_of_experience;
	}

	public void setNo_of_years_of_experience(int no_of_years_of_experience) {
		this.no_of_years_of_experience = no_of_years_of_experience;
	}

    // Default constructor
    public Doctors() {}

	

	
}

