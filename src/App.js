import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatWithAssistant from "./Pages/ChatWithAssistant"
import HomePage from "./Pages/HomePage"
import JournalPage from "./Pages/JournalPage"
import LoginPage from "./Pages/LoginPage"
import UserProfile from "./Pages/UserProfile";
import AboutUsPage from "./Pages/AboutUsPage";

import Navbar from "./Components/Homepage/Navbar/Navbar";
import Footer from "./Components/Homepage/Footer/Footer";
import GoTop from "./Components/GoToTop/GoTop";


// Routes

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Chatbot" element={<ChatWithAssistant />} />
        <Route path="/Journal" element={<JournalPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
      </Routes>
      <GoTop />
      <Footer />
    </Router>
  );
}

export default App;









