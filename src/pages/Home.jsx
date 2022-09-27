import { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DarkTheme } from "../App";

function Home({ darkModeHandler }) {
  const darkMode = useContext(DarkTheme);
  return (
    <div className={`App ${darkMode ? "darkmode" : "lightmode"}`}>
      <Header darkModeHandler={darkModeHandler} />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
