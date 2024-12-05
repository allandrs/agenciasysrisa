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
import Plan from "./components/plan";
import SecaoFormulario from "./components/secao_formulario"
import Footer from "./components/footer"
import Projects from "./components/projects";


const App = () => {

  const ref = useRef(null);
  
// verificar se a estrutura ideal seria colocar as DIVs aqui reduzindo a quantidade de componentes
  return (
    <>
      <Header refToServices={ref} />
      <Services ref={ref} />
      {/* <Clientes /> */}
      <About />
      <Processos />
      {/* <Projects /> */}
      {/* <Plan /> */}
      <SecaoFormulario />
      <Footer />
    </>
  )
}

export default App
