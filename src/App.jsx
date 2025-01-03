import React from "react";
import { About, Header, Footer, Skills, Testimonials, Work } from "./container";
import { Navbar} from './components'
import "./App.scss";
export const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};
