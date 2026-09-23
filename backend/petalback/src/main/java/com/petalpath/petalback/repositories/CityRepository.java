package com.petalpath.petalback.repositories;
import com.petalpath.petalback.models.City;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository <City, Integer> {
}
