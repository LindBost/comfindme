export const getTeams = async() => {

    const response = await fetch("/api/team");
    const result = await response.json();    
    return result;
}

export const getOrganisations = async() => {

    const response = await fetch("/api/organisation");
    const result = await response.json();

    return result;
}

export const getEmployees = async() => {

    const response = await fetch("/api/employee");
    const result = await response.json();

    return result;
}

export const filterBySearchString = (searchString, data, type) => {
    return data.filter(team => team[type].toLowerCase().includes(searchString.toLowerCase()));
}
