const API_KEY = "436d2a0eb3c6428a9ed6ef2da8e9f2fe";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

export const fetchDietPlan = async (diet, calories, mealType) => {
    try {
        const response = await fetch(
            `${BASE_URL}?apiKey=${API_KEY}&diet=${diet}&type=${mealType}&maxCalories=${calories}&addRecipeInformation=true&number=5`
        );
        
        const data = await response.json();
        console.log("API Response:", data); // Debugging log
        
        if (!data.results || data.results.length === 0) {
            console.error("No meals found");
            return [];
        }

        return data.results.map((meal) => ({
            id: meal.id,
            title: meal.title,
            image: meal.image,
            sourceUrl: meal.sourceUrl || "N/A",
            servings: meal.servings || "N/A",
            readyInMinutes: meal.readyInMinutes || "N/A"
        }));
    } catch (error) {
        console.error("Error fetching diet plan:", error);
        return [];
    }
};