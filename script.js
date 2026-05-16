
const recipes = [
  {
    name: "Creamy Pasta",
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f70?q=80&w=1200",
    description: "A rich and creamy Italian pasta recipe loaded with flavor."
  },
  {
    name: "Veggie Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
    description: "Crispy crust topped with fresh vegetables and mozzarella cheese."
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200",
    description: "Soft and moist chocolate cake perfect for dessert lovers."
  }
];

const recipeContainer = document.getElementById("recipeContainer");

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <div class="recipe-card-content">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
    </div>
  `;

  recipeContainer.appendChild(card);
});

document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("recipes").scrollIntoView({
    behavior: "smooth"
  });
});
