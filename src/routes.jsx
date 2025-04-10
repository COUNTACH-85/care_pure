import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DietGenerator from "./pages/DietGenerator";
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";
import Menstrualcycle from "./pages/Menstrualcycle";
import Login from "./components/login";
import Signup from "./components/signup";
import VoiceflowChatbot from "./components/VoiceflowChatbot";
import ProtectedRoute from "./ProtectedRoute";
import Homepage from "./pages/Homepage";

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
        {/* <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <VoiceflowChatbot />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
