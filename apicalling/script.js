async function fetchRandomMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.meals) {
            document.getElementById('meal-list').innerHTML = 'No meals found.';
            return;
        }

        displayMeal(data.meals[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('meal-list').innerHTML = `Error: ${error.message}`;
    }
}

function displayMeal(meal) {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = ''; 

    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    mealCard.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
    `;
    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredients-list');

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = `${measure ? measure + ' ' : ''}${ingredient}`;
            ingredientsList.appendChild(listItem);
        }
    }
    mealCard.appendChild(ingredientsList);
    
    mealList.appendChild(mealCard);
}
