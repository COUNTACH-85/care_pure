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
      <Footer/>
    </ErrorBoundary>
  );
};

export default App;