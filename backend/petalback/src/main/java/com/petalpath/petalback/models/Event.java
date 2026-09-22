package com.petalpath.petalback.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title; //name of event or location
    private String city; // city of event
    private String date; // date of event
    private String location; // address of event

    //empty constructor
    public Event () {}

    //completed constructor
    public Event (int id, String title, String city, String date, String location) {
        this.id = id;
        this.title = title;
        this.city = city;
        this.date = date;
        this.location = location;
    }
    public int getID() {return id;}
    public void setId(int id)  {this.id = id;}

    public String getTitle() {return title;}
    public void setTitle(String id)  {this.title = title;}

    public String getCity() {return city;}
    public void setCity(String city)  {this.city = city;}

    public String getDate() {return date;}
    public void setDate(String date)  {this.date = date;}

    public String getLocation() {return location;}
    public void setLocation(String location)  {this.location = location;}

}


