import { Routes, Route } from "react-router-dom";

import { Lessons } from "@/components/Lessons";
import { About } from "@/components/About";
import { Actors } from "@/components/Actors";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { AboutDetails } from "@/components/AboutDetails";
import { CourseDetails } from "@/components/CourseDetails";

export const App = () => (
  <div>
    <Header />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main />
            <About />
            <Lessons />
            <Actors />
          </>
        }
      />

      <Route path="/about" element={<AboutDetails />} />
      <Route path="/course" element={<CourseDetails />} />
    </Routes>

    <Contacts />
    <Footer />
  </div>
);
