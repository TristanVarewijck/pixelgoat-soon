import { useState, createContext } from "react";
import "./scss/App.scss";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
export const DarkTheme = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function darkModeToggler() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className={`App ${darkMode ? "darkmode" : "lightmode"}`}>
      <DarkTheme.Provider value={darkMode}>
        <Header darkModeHandler={darkModeToggler} />
        <Hero />
        <Footer />
      </DarkTheme.Provider>
    </div>
  );
}

export default App;
