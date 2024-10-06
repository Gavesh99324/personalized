import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatWithAssistant from "./Pages/ChatWithAssistant"
import HomePage from "./Pages/HomePage"
import JournalPage from "./Pages/JournalPage"
import LoginPage from "./Pages/LoginPage"

// Routes

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Chat" element={<ChatWithAssistant />} />
        <Route path="/Journal" element={<JournalPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;






