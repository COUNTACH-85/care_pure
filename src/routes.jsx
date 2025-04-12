import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DietGenerator from "./pages/DietGenerator";
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";
import Menstrualcycle from "./pages/Menstrualcycle";
import Login from "./components/login";
import Signup from "./components/signup";
// import VoiceflowChatbot from "./components/VoiceflowChatbot";
import ProtectedRoute from "./ProtectedRoute";
import Homepage from "./pages/Homepage";
import FoodSortingGame from "./components/games/FoodSortingGame"
import MindfulnessMazeGame from "./components/games/MindfulnessMazeGame";
import HydrationHeroGame from "./components/games/HydrationHeroGame";
import FoodSortingPage from "./pages/games/FoodSortingPage";
import MindfulnessMazePage from "./pages/games/MindfulnessMazePage";
import HydrationHeroPage from "./pages/games/HydrationHeroPage";
import { lazy } from "react";
import GamesPage from "./pages/GamesPage";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/menstrualcycle"
          element={
            <ProtectedRoute>
              <Menstrualcycle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diet-generator"
          element={
            <ProtectedRoute>
              <DietGenerator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <GamesPage />
            </ProtectedRoute>
          }
        >
          <Route path="food-sorting" element={
            <ProtectedRoute>
              <FoodSortingPage />
            </ProtectedRoute>
          } />
          <Route path="mindfulness-maze" element={
            <ProtectedRoute>
              <MindfulnessMazePage />
            </ProtectedRoute>
          } />
          <Route path="hydration-hero" element={
            <ProtectedRoute>
              <HydrationHeroPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
