import React from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GamesSection from "../components/games/GamesSection";
import { ArrowLeft } from "lucide-react";

const GamesPage = () => {
  return (
    <>
      <Helmet>
        <title>Care Pure Games | Care Pure</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 animate-fade-in relative overflow-hidden">
        {/* Fun background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/2 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-float-more-delayed"></div>
        </div>
        
        {/* <Navbar /> */}
        <main className="container mx-auto px-4 py-8 animate-slide-down relative">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6 transition-colors"
          >
            
          </Link>
          
          <h1 className="text-4xl font-bold text-center mb-8 animate-slide-in-left text-green-800">
            Care Pure Games
          </h1>
          <Outlet /> {/* Add this to render child routes */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <GamesSection />
          </div>
        </main>
      </div>
    </>
  );
};

export default GamesPage;
