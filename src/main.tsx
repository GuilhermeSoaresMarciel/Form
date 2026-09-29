import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import PageDefault from "./pages/PageDefault";
import PageDisplay from "./pages/PageDisplay";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />} />
        <Route path="/PageDisplay" element={<PageDisplay />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
