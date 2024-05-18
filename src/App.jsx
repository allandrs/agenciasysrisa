import React from "react";
import "./index.css";
import "./App.css";

// components
import Header from './components/header';
import Services from './components/services';
import About from "./components/about";
import Plan from "./components/plan"
import Testimonials from "./components/testimonials";
import Results from "./components/results";

const App = () => {

  return (
    <>
      <Header />
      <Services />
      <About />
      <Results />
      <Testimonials />
      <Plan />
    </>
  )
}

export default App
