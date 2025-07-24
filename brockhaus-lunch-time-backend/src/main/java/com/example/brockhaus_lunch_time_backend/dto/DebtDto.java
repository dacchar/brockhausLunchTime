package com.example.brockhaus_lunch_time_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class DebtDto {
    private String ordererName;
    private Double amount;
}

