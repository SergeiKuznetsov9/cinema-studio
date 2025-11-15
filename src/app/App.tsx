import { Lessons } from "@/components/Lessons";
import { About } from "@/components/About";
import { Actors } from "@/components/Actors";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Contacts } from "@/components/Contacts";

export const App = () => (
  <div>
    <Header />
    <Main />
    <About />
    <Lessons />
    <Actors />
    <Contacts />
  </div>
);
