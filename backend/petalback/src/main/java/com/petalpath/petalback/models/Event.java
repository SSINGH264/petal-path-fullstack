package com.petalpath.petalback.models;

import jakarta.persistence.*;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title; //name of event or location
    private String date; // date of event

    // Many events happen at one location
    @ManyToOne
    private Location location;

    //empty constructor
    public Event () {}

    public int getId() {return id;}
    public void setId(int id)  {this.id = id;}

    public String getTitle() {return title;}
    public void setTitle(String title)  {this.title = title;}

    public String getDate() {return date;}
    public void setDate(String date)  {this.date = date;}

    public Location getLocation() {return location;}
    public void setLocation(Location location) {this.location = location;}
}


