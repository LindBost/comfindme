package com.example.comfindme.api;

import com.example.comfindme.models.Organisation;
import com.example.comfindme.services.OrganisationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/organisation")
public class OrganisationController {

    private OrganisationService organisationService;

    public OrganisationController(OrganisationService organisationService) {
        this.organisationService = organisationService;
    }

    @GetMapping("")
    public List<Organisation> getOrg() {
        System.out.println("BackEnd");
        return organisationService.getOrg();
    }
}
