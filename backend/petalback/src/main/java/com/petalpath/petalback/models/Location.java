package com.petalpath.petalback.models;

import jakarta.persistence.*;

@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;

    @ManyToOne
    private City city;

    //empty constructor
    public Location() {}

    //getters and setters
    public int getId() {return id;}
    public void setId (int id) {this.id = id;}

    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}

    public City getCity() { return city; }
    public void setCity(City city) {this.city = city;}

}
