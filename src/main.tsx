import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App.tsx";
import "swiper/swiper.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/cinema-studio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
