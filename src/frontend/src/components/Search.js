import React, { useEffect, useState } from 'react';
import { getTeams, filterBySearchString, getOrganisations, getEmployees } from '../services/teamService';
import { PresentationList } from './PresentationList';

const Search = (props) => {
    const [searchString, setSearchString] = useState("");
    const [teams, setTeams] = useState([]);
    const [organisations, setOrganisations] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        getTeams().then(teams => {
            setTeams(teams)
        });
        getOrganisations().then(organisations => {
            setOrganisations(organisations);
        });
        getEmployees().then(employees => {
            setEmployees(employees);
        });
    }, [getTeams, getOrganisations, getEmployees]);


    const handleEnter = (e) => {
        if (e.target.value.length >= 2) {
            const filteredTeams = filterBySearchString(e.target.value, teams, "teamName")
            const filteredOrgansiations = filterBySearchString(e.target.value, organisations, "organisationName");
            const filteredEmployees = filterBySearchString(e.target.value, employees, "name");

            let empByTeam = [];

            filteredTeams.map(t => {
                empByTeam = employees.filter(e => e.team.id === t.id);
            })

            let empByOrg = [];

            filteredOrgansiations.map(o => {
                empByOrg = employees.filter(e => e.team.organisation.id == o.id)
            });
            let distinct = [...new Set([...filteredEmployees, ...empByOrg, ...empByTeam])];
            setResults(distinct);
        }
    }
    return (
        <div className="searchContainer">
            <input value={searchString} onChange={(e) => setSearchString(e.target.value)} onKeyUp={handleEnter} />
            <PresentationList
                results={results}
                setSelectedUser={props.setSelectedUser} />
        </div>

    );
}

export default Search;