package com.petalpath.petalback.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // will be mapped to database table
public class City {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String State;

}
