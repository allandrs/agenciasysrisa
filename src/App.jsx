import React from "react";
import "./index.css";
import "./App.css";

// components
import Header from './components/header';
import Services from './components/services';
import About from "./components/about";
import Clientes from "./components/clientes";
import PlanTeste from "./components/planteste";
import SecaoFormulario from "./components/secao_formulario"
import Footer from "./components/footer"


const App = () => {

  return (
    <>
      <Header />
      <Services />
      <About />
      <Clientes />
      <PlanTeste />
      <SecaoFormulario />
      <Footer />
    </>
  )
}

export default App
