import React from "react";
import styled from 'styled-components'

//images
import Gears from "../../public/Gear@1x-3.4s-200px-200px.svg";
import Meeting from "../../public/undraw_meeting_re_i53h.svg";
import Arrow from "../../public/arrow-158377_1280-removebg-preview.png";
import Approval from "../../public/undraw_accept_request_re_d81h.svg"
import Test from "../../public/undraw_split_testing_l1uw.svg"
import Build from "../../public/build.png"
import Finish from "../../public/undraw_confirmation_re_b6q5.svg"

//components
import CardProcessos from "./card_processos.jsx";

export default function Processos() {
  
  // const CardProcessos = styled.margin`
  //   margin: 2rem;
  // `

  return (
    <>
      <div id="comofunciona" className="flex  w-full h-[2550px] md:h-[1800px] justify-center bg-[white] relative mb-24 md:mb-14 ">
        <div className="w-[800px] bg-gradient-to-r from-[#65b4ff] via-[#d5eced] to-[#c2ebed] rounded-xl mt-6 mx-2">
          <div className="flex justify-center items-center shrink-0 gap-4 text-4xl mt-8 text-center">
            <div className="invisible">di</div>
            <h1 className="text-3xl md:text-4xl">Como funciona</h1>
            <img src={Build} className="h-10 flex-none" alt="" />
          </div>
          <div className="md:grid md:grid-cols-2 mx-2 md-w-96 justify-center place-items-center items-start md:h-72 mt-10 ">
            <CardProcessos
              titulo="1º Passo - Briefing"
              subtitulo="Entendendo suas necessidades"
              img={Meeting}
              texto="Entendendo seu negócio, objetivos e funcionalidades necessárias." 
              texto2="Aqui capturarmos a essência da sua marca e planejamos um projeto que atenda às suas expectativas."
            />
            <CardProcessos
              titulo="2º Passo - Desenvolvimento"
              subtitulo="Transformando ideias em realidade"
              img={Gears}
              texto="Com o briefing em mãos, iniciamos o desenvolvimento do design e a estrutura do seu site." texto2="Garantindo a responsividade, usabilidade e uma navegação intuitiva, atentos para os detalhes técnicos para que o site seja ágil, seguro e otimizado para SEO."
            />
            <CardProcessos
              titulo="3º Passo - Aprovação"
              subtitulo="Transformando ideias em realidade"
              img={Approval}
              texto="Após o desenvolvimento, apresentamos o site para sua avaliação." texto2="Você revisa o layout, funcionalidades e conteúdo. Ajustamos conforme necessário para que tudo fique exatamente como você imaginou."
            />
            <CardProcessos
              titulo="4º Passo - Teste"
              subtitulo="Garantindo a perfeição"
              img={Test}
              texto="Antes de ir ao ar, realizamos uma série de testes rigorosos." texto2="Verificamos o desempenho em diferentes dispositivos e navegadores, testamos a velocidade de carregamento e eliminamos qualquer erro para garantir que tudo funcione perfeitamente."
            />
            <CardProcessos
              titulo="5º Passo - Entrega"
              subtitulo="Seu site no ar!"
              img={Finish}
              texto="Com os testes finalizados e sua aprovação, é hora de lançar o site ou sistema!" texto2="Publicamos a plataforma e monitoramos o funcionamento                 inicial para garantir que esteja tudo rodando perfeitamente. Agora você tem uma presença digital sólida, pronta para gerar resultados."
              
            />
          </div>
        </div>
      </div>
    </>
  );
}
