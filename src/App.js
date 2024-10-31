import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatWithAssistant from "./Pages/ChatWithAssistant"
import HomePage from "./Pages/HomePage"
import JournalPage from "./Pages/JournalPage"
import LoginPage from "./Pages/LoginPage"
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
        <Route path="/Chat" element={<ChatWithAssistant />} />
        <Route path="/Journal" element={<JournalPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
      <GoTop />
      <Footer />
    </Router>
  );
}

export default App;







