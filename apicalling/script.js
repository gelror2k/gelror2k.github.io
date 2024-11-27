// Function to fetch a random meal from TheMealDB API
async function fetchRandomMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await fetch(url);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if a meal is returned
        if (!data.meals) {
            document.getElementById('meal-list').innerHTML = 'No meals found.';
            return;
        }

        // Display the meal
        displayMeal(data.meals[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('meal-list').innerHTML = `Error: ${error.message}`;
    }
}

// Function to display the meal
function displayMeal(meal) {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = ''; // Clear previous results

    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    mealCard.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <a href="${meal.strSource}" target="_blank">Recipe Link</a>
    `;
    mealList.appendChild(mealCard);
}
