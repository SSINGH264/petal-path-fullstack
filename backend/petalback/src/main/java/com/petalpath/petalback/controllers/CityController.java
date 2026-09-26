package com.petalpath.petalback.controllers;

import com.petalpath.petalback.models.City;
import com.petalpath.petalback.repositories.CityRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/cities") //base url
@CrossOrigin (origins = "http://localhost:5173") //API call

public class CityController {

    private final CityRepository cityRepository;

    public CityController(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    // all cities
    @GetMapping
    public List<City> getCities() {
        return cityRepository.findAll();
    }

    // reads specific city
    @GetMapping ("/{id}")
    public City getCity (@PathVariable int id) {
        return cityRepository.findById(id).orElse(null);
    }

    // saves city
    @PostMapping
    public City addCity(@RequestBody City city) {
        return cityRepository.save(city);
    }

    //update
    @PutMapping ("/{id}")
    public City updateCity(@PathVariable int id, @RequestBody City city) {
        city.setId(id);
        return cityRepository.save(city);
    }

    //delete
    @DeleteMapping("/{id}")
    public void deleteCity(@PathVariable int id) {
        cityRepository.deleteById(id);
    }


}
