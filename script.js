const apiKey = '3'; 
async function fetchNBAPlayer() {
    try {

        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?t=NBA`);
        

        const data = await response.json();
        

        if (data.player && data.player.length > 0) {

            const player = data.player[Math.floor(Math.random() * data.player.length)];
            
            document.getElementById('player-container').innerHTML = `
                <h2>${player.strPlayer}</h2>
                <p><strong>Team:</strong> ${player.strTeam}</p>
                <p><strong>Position:</strong> ${player.strPosition}</p>
                <p><strong>Nationality:</strong> ${player.strNationality}</p>
                <img src="${player.strThumb}" alt="${player.strPlayer}" />
            `;
        } else {
            document.getElementById('player-container').innerHTML = `<p>No player found. Please try again later.</p>`;
        }
    } catch (error) {
        document.getElementById('player-container').innerHTML = `<p>Failed to load player data. Please try again later.</p>`;
    }
}

document.getElementById('fetch-player-btn').addEventListener('click', fetchNBAPlayer);
