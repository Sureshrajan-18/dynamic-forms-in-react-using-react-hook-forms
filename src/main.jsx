// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";  // ✅ React 19 API
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 
import Dynamic from "./Pages/Dynamic";
import Normal from "./Pages/Normal"; 

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<App />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/dynamic" element={<Dynamic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);