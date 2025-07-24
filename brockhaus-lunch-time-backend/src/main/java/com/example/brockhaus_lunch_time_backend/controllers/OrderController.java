package com.example.brockhaus_lunch_time_backend.controllers;

import com.example.brockhaus_lunch_time_backend.dto.DebtDto;
import com.example.brockhaus_lunch_time_backend.dto.DishOrderDto;
import com.example.brockhaus_lunch_time_backend.entities.DishOrder;
import com.example.brockhaus_lunch_time_backend.services.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v2")
public class OrderController {
    private OrderService orderService;
    private ModelMapper modelMapper;

    @Autowired
    public OrderController(OrderService orderService, ModelMapper modelMapper) {
        this.orderService = orderService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(path = "orders")
    public List<DishOrderDto> getAllOrders(){
        return orderService.getAllOrders().stream().map(this::convertToDto).toList();
    }

    @GetMapping(path = "orders/{id}")
    public ResponseEntity<DishOrderDto> getOrder(@PathVariable long id){
        Optional<DishOrderDto> order = convertToDto(orderService.getOrder(id));
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping(path = "orders/{id}")
    public ResponseEntity<DishOrderDto> updateOrder(@PathVariable long id, @RequestBody DishOrderDto dishOrderDto) {
        DishOrderDto updatedDishOrderDto = convertToDto( orderService.updateOrder(id, convertToEntity(dishOrderDto)) );

        return new ResponseEntity<DishOrderDto>(updatedDishOrderDto, HttpStatus.OK);
    }

    @DeleteMapping(path = "orders/{id}")
    public ResponseEntity<Void> deleteOrders(@PathVariable long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping(path = "orders")
    public ResponseEntity<Void> createOrder(@RequestBody DishOrderDto dishOrderDto) {
        DishOrder dishOrder = convertToEntity(dishOrderDto);
        dishOrder.setId(0);
        DishOrder createdDishOrder = orderService.createOrder(dishOrder);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdDishOrder.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @GetMapping(path = "debts/{buyerName}")
    public  List<DebtDto>  retrieveDebts(@PathVariable String buyerName){
        return orderService.retrieveDebts(buyerName);
    }

    private DishOrderDto convertToDto(DishOrder dishOrder) {
        return modelMapper.map(dishOrder, DishOrderDto.class);
    }

    private Optional<DishOrderDto> convertToDto(Optional<DishOrder> dishOrder) {
        return dishOrder.map(this::convertToDto);
    }

    private DishOrder convertToEntity(DishOrderDto dishOrderDto) {
        return modelMapper.map(dishOrderDto, DishOrder.class);
    }
}