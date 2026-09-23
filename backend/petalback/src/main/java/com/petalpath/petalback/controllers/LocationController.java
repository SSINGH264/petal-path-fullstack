package com.petalpath.petalback.controllers;

import com.petalpath.petalback.repositories.LocationRepository;
import com.petalpath.petalback.models.Location;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations")
@CrossOrigin(origins = "http://localhost:5173") //API call
public class LocationController {
    private final LocationRepository locationRepository;

    public LocationController(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    // all locations
    @GetMapping
    public List<Location> getLocations(){
        return locationRepository.findAll();
    }

    // reads specific location
    @GetMapping("/{id}")
    public Location getLocation(@PathVariable int id) {
        return locationRepository.findById(id).orElse(null);
    }

    // saves location
    @PostMapping
    public Location addLocation(@RequestBody Location location) {
        return locationRepository.save(location);
    }

    // update
    @PutMapping("/{id}")
    public Location updateLocation(@PathVariable int id, @RequestBody Location location) {
        location.setId(id);
        return locationRepository.save(location);
    }

    // delete
    @DeleteMapping("/{id}")
    public void deleteLocation(@PathVariable int id) {
        locationRepository.deleteById(id);
    }
}
