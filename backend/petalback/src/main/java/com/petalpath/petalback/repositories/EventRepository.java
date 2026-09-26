package com.petalpath.petalback.repositories;
import com.petalpath.petalback.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

//Interface for event

public interface EventRepository extends JpaRepository<Event, Integer> {
}
