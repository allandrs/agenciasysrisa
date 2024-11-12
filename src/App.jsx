import React from "react";
import "./index.css";
import "./App.css";
import { useRef } from "react";

// components
import Header from './components/header';
import Services from './components/services';
import About from "./components/about";
// import Clientes from "./components/clientes";
import Processos from './components/processos';
// import Plan from "./components/plan";
// import SecaoFormulario from "./components/secao_formulario"
import Footer from "./components/footer"
import Projects from "./components/projects";


const App = () => {

  const ref = useRef(null);
  
  return (
    <>
      <Header refToServices={ref} />
      <Services ref={ref} />
      {/* <Clientes /> */}
      {/* <Plan /> */}
      <Projects />
      <About />
      <Processos />
      {/* <SecaoFormulario /> */}
      <Footer />
    </>
  )
}

export default App
