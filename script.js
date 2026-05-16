fetch('data.json')
  .then(response => response.json())
  .then(recipes => {
    const recipeContainer = document.getElementById('recipeContainer');

    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('recipe-card');

      const ingredientsList = recipe.ingredients
        .map(item => `<li>${item}</li>`)
        .join('');

      const stepsList = recipe.steps
        .map(step => `<li>${step}</li>`)
        .join('');

      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">

        <div class="recipe-card-content">
          <h3>${recipe.name}</h3>
          <p><strong>Country:</strong> ${recipe.country}</p>
          <p>${recipe.description}</p>

          <h4>Ingredients</h4>
          <ul>
            ${ingredientsList}
          </ul>

          <h4>Steps</h4>
          <ol>
            ${stepsList}
          </ol>
        </div>
      `;

      recipeContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading recipes:', error));


document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('recipes').scrollIntoView({
    behavior: 'smooth'
  });
});