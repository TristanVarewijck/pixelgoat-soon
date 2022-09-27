import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./scss/App.scss";

import Home from "./pages/Home";
import Private from "./pages/Private";
import Auth from "./pages/Auth";

export const DarkTheme = createContext(null);
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuth, setIsAuth] = useState(null);

  function darkModeToggler() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <BrowserRouter>
      <DarkTheme.Provider value={darkMode}>
        <Routes>
          <Route
            path="/"
            element={<Home darkModeHandler={darkModeToggler} />}
          />
          {!isAuth && (
            <Route
              path="/auth"
              element={<Auth authenticate={() => setIsAuth(true)} />}
            />
          )}

          {isAuth && (
            <Route
              path="/private"
              element={<Private logout={() => setIsAuth(false)} />}
            />
          )}
          <Route
            path="/private"
            element={<Navigate to={isAuth ? "/private" : "/auth"} />}
          />
        </Routes>
      </DarkTheme.Provider>
    </BrowserRouter>
  );
}

export default App;
