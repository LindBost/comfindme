package com.example.comfindme.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class Organisation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String organisationName;
    @OneToMany(targetEntity = Team.class)
    private Set<Team> teams;
}
