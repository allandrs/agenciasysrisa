import React from "react";
import "./index.css";
import "./App.css";

// components
import Header from './components/header';
import Services from './components/services';
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Results from "./components/results";
import Plan from "./components/plan"
import SecaoFormulario from "./components/secao_formulario"
import Footer from "./components/footer"


const App = () => {

  return (
    <>
      <Header />
      <Services />
      <About />
      <Results />
      <Testimonials />
      <Plan />
      <SecaoFormulario />
      <Footer />
    </>
  )
}

export default App
