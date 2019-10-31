package com.example.comfindme.models;

import lombok.Data;
import org.aspectj.weaver.ast.Or;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String teamName;
    private String description;
    @OneToMany(targetEntity = Employee.class)
    private Set<Employee> employees;
    @ManyToOne(targetEntity = Organisation.class)
    private Organisation organisation;
    private int floor;

}
