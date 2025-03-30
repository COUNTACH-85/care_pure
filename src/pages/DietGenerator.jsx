import { useState } from "react";
import { motion } from "framer-motion";
import { fetchDietPlan } from "../api/spoonacular";
import Loader from "../components/Loader";

const DietGenerator = () => {
    const [diet, setDiet] = useState("vegetarian");
    const [calories, setCalories] = useState(500);
    const [mealType, setMealType] = useState("breakfast");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const generateDiet = async () => {
        setLoading(true);
        const data = await fetchDietPlan(diet, calories, mealType);
        setMeals(data);
        setLoading(false);
    };

    return (
        <motion.div 
            className="min-h-screen bg-white p-6"
            initial={{ opacity: 0, scale: 0.95 }} // Added scale effect for a smoother opening
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-3xl mx-auto bg-green-50 shadow-lg rounded-2xl p-6">
                <motion.h1 
                    className="text-2xl font-semibold text-green-700 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Diet Plan Generator
                </motion.h1>

                <div className="flex flex-col gap-4">
                    {/* Diet Type */}
                    <div className="flex gap-2 flex-wrap justify-center"> {/* Centered buttons */}
                        {["vegetarian", "vegan", "paleo", "ketogenic"].map((type) => (
                            <motion.button 
                                key={type} 
                                onClick={() => setDiet(type)}
                                className={`px-4 py-2 rounded-lg border transition-all ${diet === type ? "bg-green-600 text-white scale-105" : "border-green-400 text-green-700 hover:bg-green-100"}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Calorie Count */}
                    <label className="text-green-700">Target Calories:</label>
                    <motion.input 
                        type="range" 
                        min="100" max="3000" 
                        value={calories} 
                        onChange={(e) => setCalories(e.target.value)}
                        className="w-full cursor-pointer accent-green-600" // Changed slider color to green
                        whileHover={{ scale: 1.02 }}
                    />
                    <p className="text-center text-green-700 font-semibold">{calories} kcal</p>

                    {/* Meal Type */}
                    <div className="flex gap-2 justify-center"> {/* Centered buttons */}
                        {["breakfast", "lunch", "dinner"].map((type) => (
                            <motion.button 
                                key={type} 
                                onClick={() => setMealType(type)}
                                className={`px-4 py-2 rounded-lg border transition-all ${mealType === type ? "bg-green-600 text-white scale-105" : "border-green-400 text-green-700 hover:bg-green-100"}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Generate Button */}
                    <motion.button 
                        onClick={generateDiet}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Generate Plan
                    </motion.button>
                </div>

                {loading && <Loader />}

                {/* Display Meals */}
                {meals.length > 0 && (
                    <motion.div 
                        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {meals.map((meal) => (
                            <motion.div 
                                key={meal.id} 
                                className="bg-white p-4 border-l-4 border-green-500 shadow-md rounded-lg transition-transform"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Meal Title */}
                                <h3 className="text-lg font-semibold text-green-800">{meal.title}</h3>
                                
                                {/* Image */}
                                {meal.image && (
                                    <motion.img 
                                        src={meal.image} 
                                        alt={meal.title} 
                                        className="w-full h-40 object-cover rounded-md mt-2"
                                        whileHover={{ scale: 1.02 }}
                                    />
                                )}

                                {/* Additional Info */}
                                <p className="text-gray-700 mt-2"><strong>Servings:</strong> {meal.servings}</p>
                                <p className="text-gray-700"><strong>Ready In:</strong> {meal.readyInMinutes} mins</p>

                                {/* Source URL */}
                                {meal.sourceUrl !== "N/A" ? (
                                    <motion.a 
                                        href={meal.sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-block mt-3 text-green-600 font-medium hover:underline"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        View Full Recipe
                                    </motion.a>
                                ) : (
                                    <p className="text-gray-500">Recipe link not available</p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default DietGenerator;


