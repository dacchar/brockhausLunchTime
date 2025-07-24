package com.example.brockhaus_lunch_time_backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class DishOrder {

    @Id
    @GeneratedValue
    private long id;

    private String ordererName;
    private String buyerName;
    private String dish;
    private Long price;
    private Boolean paid;
    private String paypal;
    private Date time;
}
