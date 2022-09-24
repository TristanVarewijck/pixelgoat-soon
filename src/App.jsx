import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";

import Home from "./pages/Home";
import Private from "./pages/Private";
export const DarkTheme = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function darkModeToggler() {
    console.log("invoked!");
    setDarkMode((prevState) => !prevState);
  }

  return (
    <BrowserRouter>
      <DarkTheme.Provider value={darkMode}>
        <Routes>
          <Route path="/">
            <Route index element={<Home darkModeHandler={darkModeToggler} />} />
            <Route path="Private" element={<Private />} />
          </Route>
        </Routes>
      </DarkTheme.Provider>
    </BrowserRouter>
  );
}

export default App;
