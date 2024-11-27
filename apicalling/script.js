// Replace with your API key from TheSportsDB
const apiKey = '3';

// Function to fetch all football teams from TheSportsDB
async function fetchRandomTeam() {
    const url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/all_teams.php`;

    try {
        const response = await fetch(url);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Log the response to check its content
        console.log(data);

        if (!data.teams || data.teams.length === 0) {
            document.getElementById('teams-list').innerHTML = 'No teams found.';
            return;
        }

        // Get a random team from the teams list
        const randomTeam = getRandomTeam(data.teams);
        displayTeam(randomTeam);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('teams-list').innerHTML = `Error: ${error.message}`;
    }
}

// Function to get a random team from the array of teams
function getRandomTeam(teams) {
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
}

// Function to display the team on the webpage
function displayTeam(team) {
    const teamsList = document.getElementById('teams-list');
    teamsList.innerHTML = ''; // Clear any previous content

    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    teamCard.innerHTML = `
        <h3>${team.strTeam}</h3>
        <img src="${team.strTeamLogo}" alt="${team.strTeam}" />
        <p><strong>Stadium:</strong> ${team.strStadium}</p>
        <p><strong>Founded:</strong> ${team.intFormedYear}</p>
        <p><strong>Country:</strong> ${team.strCountry}</p>
    `;
    teamsList.appendChild(teamCard);
}

// Attach the fetch function to the button
document.getElementById('random-button').addEventListener('click', fetchRandomTeam);
