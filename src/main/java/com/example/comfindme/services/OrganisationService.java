package com.example.comfindme.services;

import com.example.comfindme.models.Organisation;
import com.example.comfindme.repositories.OrganisationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganisationService {

    private OrganisationRepository organisationRepository;


    public OrganisationService(OrganisationRepository organisationRepository) {
        this.organisationRepository = organisationRepository;
    }

    public void saveOrg(Organisation organisation) {
        organisationRepository.save(organisation);
    }

    public List<Organisation> getOrg() {
        return organisationRepository.findAll();
    }
}
