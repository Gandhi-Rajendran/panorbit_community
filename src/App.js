import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:{userId}" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
