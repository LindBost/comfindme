package com.example.comfindme.repositories;

import com.example.comfindme.models.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganisationRepository extends JpaRepository<Organisation, Long> {
    List<Organisation> findAll();
}
