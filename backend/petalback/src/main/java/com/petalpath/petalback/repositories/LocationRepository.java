package com.petalpath.petalback.repositories;

import com.petalpath.petalback.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository <Location, Integer> {
}
