package com.example.brockhaus_lunch_time_backend.dto;

import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class DishOrderDto {
    private long id;
    private String ordererName;
    private String buyerName;
    private String dish;
    private Long price;
    private Boolean paid;
    private String paypal;
    private Date time;
}
