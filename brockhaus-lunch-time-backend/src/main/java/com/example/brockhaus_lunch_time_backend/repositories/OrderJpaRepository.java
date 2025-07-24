package com.example.brockhaus_lunch_time_backend.repositories;

import com.example.brockhaus_lunch_time_backend.entities.DishOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderJpaRepository extends JpaRepository<DishOrder, Long> {
}
