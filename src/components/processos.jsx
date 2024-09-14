import React from "react";
import Card from "./card_service.jsx"

export default function Processos() {
  return (
    <>
      <div className="flex md:h-[600px] justify-center items-center bg-white relative my-24 ">
        <div className="flex flex-col md:flex-row gap-16 md:h-72">
          <Card 
          titulo="1 Briefing" 
          img="" 
          texto1="Tudo começa com a compreensão do problema e dos objetivos do seu negócio. Em seguida criamos um plano para construir seu aplicativo do zero. Vamos definir as características do site ou estratégias de automação, incluindo identidade visual, envio de textos e imagens." />
          <Card 
          titulo="2 Desenvolvimento" 
          img="" 
          texto1="Tudo começa com a compreensão do problema e dos objetivos do seu negócio. Em seguida criamos um plano para construir seu aplicativo do zero. Vamos definir as características do site ou estratégias de automação, incluindo identidade visual, envio de textos e imagens." />
          <Card 
          titulo="3 Aprovação" 
          img="" 
          texto1="Tudo começa com a compreensão do problema e dos objetivos do seu negócio. Em seguida criamos um plano para construir seu aplicativo do zero. Vamos definir as características do site ou estratégias de automação, incluindo identidade visual, envio de textos e imagens." />
          {/* <p className="text-wrap text-gray-500 ">
            Tudo começa com a{" "}
            <span className="font-extrabold">
              compreensão do problema e dos objetivos do seu negócio.
            </span>{" "}
            Em seguida criamos um plano para construir seu aplicativo do zero.
            1 Briefing
  Vamos definir as características do site ou estratégias de automação, incluindo identidade visual, envio de textos e imagens.
          </p>
          <br />
          <p className="text-wrap text-gray-500">
            A partir daí, selecionamos e designamos membros de confiança da nossa
            equipe para o seu projeto. Depois de construir uma equipe de produtos
            coesa,{" "}
            <span className="font-extrabold">
              fornecemos serviços abrangentes de desenvolvimento de sistemas
            </span>{" "}
            sob demanda.
          </p> */}
        </div>
      </div>
    </>
  );
}
