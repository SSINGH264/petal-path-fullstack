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
    private String state;
    private boolean interested = false;

    //empty constructor
    public City () {}

    //adding getters and setters
    public int getId() {return id;}
    public void setId(int id)  {this.id = id;}

    public String getName () {return name;}
    public void setName(String name) {this.name = name;}

    public String getState() {return state;}
    public void setState(String state) {this.state = state;}

    public boolean isInterested() {return interested;}
    public void setInterested(boolean interested) {this.interested = interested;}
}
