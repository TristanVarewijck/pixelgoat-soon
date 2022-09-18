import { useState } from "react";
import "./scss/App.scss";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeToggler() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className={`App ${darkMode ? "darkmode" : ""}`}>
      <Header darkMode={darkMode} darkModeHandler={darkModeToggler} />
      <Hero darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
