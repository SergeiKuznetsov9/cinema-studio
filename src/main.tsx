import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App.tsx";
import "swiper/swiper.css";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/cinema-studio">
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
