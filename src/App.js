import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FooterContainer from "./Components/containers/footer";

function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light')

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])


  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <FooterContainer />
    </div>
  );
}

export default App;
