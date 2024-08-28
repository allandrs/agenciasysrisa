import React from "react";
import Card from "./card";
import Vilabeer from "../../public/Vila-Beer.png";
import Elmiz from "../../public/black-clean.png";
import Darkz from "../../public/darkz.png";
import Devfinance from "../../public/devfinance.png";


export default function Services() {
  return (
    <>
      <div className="bg-[#0b112b] h-[122rem] md:h-[44rem] w-full relative">
        <div className="flex justify-center mx-2 md:mx-8">
          <h1 className="font-bold pt-6 text-nowrap text-white">
            <span className="text-[#06d2dd] ">Empresas</span> que estão crescendo
            conosco
          </h1>
        </div>
        <div className="flex md:gap-32 space-y-5 md:space-y-0 mt-8 justify-center mx-2 md:mx-8">
          <img src={Vilabeer} alt="logo" className="h-20" />
          
          <img src={Elmiz} alt="logo" className="h-20 rounded-full bg-contain" />
                    
          <img src={Darkz} alt="logo" className="h-20 rounded-full" />
          
          <img src={Devfinance} alt="logo" className="h-20 rounded-full" />
          
        </div>
        <div className="flex flex-col items-center pt-16 mx-2 md:mx-8">
          <h1 className="text-3xl font-extrabold text-white">
            O que <span className="text-[#06d2dd]">nós fazemos.</span>
          </h1>
          <br />
          <p className="text-wrap text-gray-500 ">
            Tudo começa com a{" "}
            <span className="font-extrabold">
              compreensão do problema e dos objetivos do seu negócio.
            </span>{" "}
            Em seguida criamos um plano para construir seu aplicativo do zero.
          </p>
          <br />
          <p className="text-wrap text-gray-500">
            A partir daí, selecionamos e designamos membros de confiança da
            nossa equipe para o seu projeto. Depois de construir uma equipe de
            produtos coesa,{" "}
            <span className="font-extrabold">
              fornecemos serviços abrangentes de desenvolvimento de sistemas
            </span>{" "}
            sob demanda.
          </p>
        </div>
        <div className="mx-8">
          <div className="flex flex-col justify-center items-center md:flex-row gap-3 pt-6">
            <Card
              titulo="Gerencie seus clientes e produtos"
              img="https://via.placeholder.com/40"
              texto="Corte custos Aumente a produtividade"
            />
            <Card
              titulo="Gerencie agendamentos"
              img="https://via.placeholder.com/40"
              texto="Corte custos Aumente a produtividade"
            />
            <Card
              titulo="Relatórios de vendas"
              img="https://via.placeholder.com/40"
            />
            <Card
              titulo="Mensagens e lembretes automáticos"
              img="https://via.placeholder.com/40"
            />
          </div>
        </div>
      </div>
    </>
  );
}
