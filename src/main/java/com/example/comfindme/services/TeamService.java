package com.example.comfindme.services;

import com.example.comfindme.models.Team;
import com.example.comfindme.repositories.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {
    private TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public void saveTeam(Team team) {
        teamRepository.save(team);
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }
}
