import React from "react";
import Card from "./card_service";
import Vilabeer from "../../public/Vila-Beer.png";
import Elmiz from "../../public/black-clean.png";
import Darkz from "../../public/darkz.png";
import Devfinance from "../../public/devfinance.png";


export default function Services() {
  return (
    <>
      <div className="bg-[#0b112b] h-[122rem] md:h-[44rem] w-full relative border-none">
        <div className="flex justify-center mx-2 md:mx-8 border-none">
          <h1 className="font-bold pt-6 text-nowrap text-white">
            <span className="text-[#06d2dd] ">Empresas</span> que estão crescendo
            conosco
          </h1>
        </div>
        <div className="flex gap-2 md:gap-32 mt-8 justify-center mx-2 md:mx-8">
          <img src={Vilabeer} alt="logo" className="h-20 rounded-full"/>
          
          <img src={Elmiz} alt="logo" className="h-20 rounded-full bg-contain" />
                    
          <img src={Darkz} alt="logo" className="h-20 rounded-full" />
          
          <img src={Devfinance} alt="logo" className="h-20 rounded-full" />
          
        </div>
        <div className="flex flex-col items-center pt-16 mx-2 md:mx-8">
          <h1 className="text-3xl font-extrabold text-white">
            O que <span className="text-[#06d2dd]">nós fazemos.</span>
          </h1>
          <br />

        </div>
        <div className="mx-8">
          <div className="flex flex-col justify-center items-center md:flex-row gap-3 pt-6">
            <Card
              titulo="Sistema de gerenciamento de "
              img="https://via.placeholder.com/40"
              texto="Corte "
            />
            <Card
              titulo="Sistema de agendamentos"
              img="./public/calendar-7041843.png"
              texto1="Corte custos e aumente a produtividade, automatizando o processo de agendamento do seu negócio, com mensagens e lembretes automáticos."
              // texto2="Corte custos Aumente a produtividade \n continuação"
              // texto3="Corte custos Aumente a produtividade \n continuação"
              // texto4="Corte custos Aumente a produtividade \n continuação"
              />
            <Card
              titulo="Desenvolvimento de site"
              img="https://via.placeholder.com/40"
              texto1="Permita que o seu cliente conheça seu negócio pelo canal online."
            />
            <Card
              titulo="E-commerce"
              img="https://via.placeholder.com/40"
              texto1="Criação de lojas virtuais com recursos modernos e mais avançados do mercado, loja própria sem comissões por venda e com aplicativo integrado para vender online."
            />
          </div>
        </div>
      </div>
    </>
  );
}
