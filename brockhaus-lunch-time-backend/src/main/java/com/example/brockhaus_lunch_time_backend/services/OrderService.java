package com.example.brockhaus_lunch_time_backend.services;

import com.example.brockhaus_lunch_time_backend.dto.DebtDto;
import com.example.brockhaus_lunch_time_backend.entities.DishOrder;
import com.example.brockhaus_lunch_time_backend.repositories.OrderJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

@Service
public class OrderService {

    private OrderJpaRepository orderJpaRepository;

    @Autowired
    public OrderService(OrderJpaRepository orderJpaRepository) {
        this.orderJpaRepository = orderJpaRepository;
    }

    public List<DishOrder> getAllOrders() {
        return orderJpaRepository.findAll();
    }

    public Optional<DishOrder> getOrder(long id) {
        return orderJpaRepository.findById(id);
    }

    public DishOrder updateOrder(long id, DishOrder dishOrder) {
        return orderJpaRepository.save(dishOrder);
    }

    public void deleteOrder(long id) {
       orderJpaRepository.deleteById(id);
    }

    public DishOrder createOrder(DishOrder dishOrder) {
        dishOrder.setId(0);
        return orderJpaRepository.save(dishOrder);
    }

    public List<DebtDto> retrieveDebts(String buyerName) {
        return getAllOrders()
                .stream()
                .filter(e -> !e.getPaid())
                .filter(e -> e.getBuyerName().equals(buyerName))
                .collect(groupingBy(DishOrder::getOrdererName, Collectors.summarizingDouble(DishOrder::getPrice)))
                .entrySet()
                .stream()
                .map(e -> new DebtDto(e.getKey(), e.getValue().getSum()))
                .toList();
    }
}
