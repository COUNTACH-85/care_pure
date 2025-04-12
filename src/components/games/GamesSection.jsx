import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Apple, Droplets, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const GamesSection = () => {
  const games = [
    {
      id: "food-sorting",
      title: "Healthy Food Sorting Game",
      description: "Sort foods into healthy and unhealthy categories to learn about nutrition.",
      icon: <Apple className="h-10 w-10 text-green-500" />,
      path: "/games/food-sorting",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: "hydration-hero",
      title: "Hydration Hero",
      description: "Help keep your character hydrated by collecting water drops and avoiding dehydration!",
      icon: <Droplets className="h-10 w-10 text-emerald-500" />,
      path: "/games/hydration-hero",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      id: "mindfulness-maze",
      title: "Mindfulness Maze",
      description: "Navigate through the maze while practicing mindfulness techniques.",
      icon: <Brain className="h-10 w-10 text-teal-500" />,
      path: "/games/mindfulness-maze",
      gradient: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Card 
          key={game.id} 
          className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 bg-white/80 backdrop-blur-sm"
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-sm">
              {game.icon}
            </div>
            <div>
              <CardTitle className="text-green-800 text-xl">{game.title}</CardTitle>
              <CardDescription className="text-gray-600 mt-1">{game.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Link to={game.path}>
              <Button className={`w-full bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300`}>
                Play Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GamesSection;
