package com.example.comfindme.api;

import com.example.comfindme.dto.TeamDTO;
import com.example.comfindme.models.Team;
import com.example.comfindme.services.TeamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    private TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping("/create")
    public void saveTeam(@RequestBody TeamDTO teamDTO) { System.out.println(teamDTO.getTeamName());
        Team team = new Team();
        team.setTeamName(teamDTO.getTeamName());
        team.setDescription(teamDTO.getDescription());
        teamService.saveTeam(team);
        System.out.println("Saved!");
    }

    @GetMapping("")
    public List<Team> getTeams() {
        System.out.println("BackEnd");
        return teamService.getTeams();
    }

}
