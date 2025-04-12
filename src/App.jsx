import React from "react";
import { useState } from 'react'
// import './App.css'
import AppRoutes from './routes';
import "@radix-ui/themes/styles.css";
import ErrorBoundary from './ErrorBoundary';
import VoiceflowChatbot from './components/VoiceflowChatbot';
import Footer from "./components/footer";

const App = () => {
  return (
    <ErrorBoundary>
      <VoiceflowChatbot />
      <AppRoutes />
      <div className=" bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 animate-fade-in relative overflow-hidden">
        <main className="container mx-auto px-4 py-8 animate-slide-down relative">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Footer />
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;