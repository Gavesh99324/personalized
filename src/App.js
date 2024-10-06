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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Chat" component={ChatWithAssistant} />
        <Route exact path="/Journal" component={JournalPage} />
        <Route exact path="/Login" component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;





