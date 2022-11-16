import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./route/About";
import Home from "./route/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
