package com.petalpath.petalback.controllers;

import com.petalpath.petalback.models.Event;
import com.petalpath.petalback.repositories.EventRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Rest for handling HTTP requests
@RestController
//Setting the URL
@RequestMapping ("/events")

public class EventController {

    private final EventRepository eventRepository;

    public EventController (EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    //Read (getting events) find all
    @GetMapping
    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    //Find by id
    @GetMapping ("/{id}")
    public Event getItem(@PathVariable int id) {
        return eventRepository.findById(id).orElse(null);
    }

    //Adding an item
    @PostMapping
    public Event addItem(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    //Update item
    @PutMapping ("/{id}")
    public Event updateEvent(@PathVariable int id, @RequestBody Event event) {
        event.setId(id);
        return eventRepository.save(event);
    }

    //Delete item
    @DeleteMapping ("/{id}")
    public void deleteItem(@PathVariable int id) {
        eventRepository.deleteById(id);
    }

}
