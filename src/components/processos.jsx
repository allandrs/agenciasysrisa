import React from "react";
import Card from "./card_service.jsx"
import Gears from "../../public/Gear@1x-5.6s-200px-200px.svg"
import Meeting from "../../public/undraw_meeting_re_i53h.svg"
import Arrow from "../../public/arrow-158377_1280-removebg-preview.png"

export default function Processos() {
  return (
    <>
      <div className="flex flex-col items-center md:h-[1700px] justify-start bg-white relative my-24 md:my-14">
        <div className="text-4xl "><h1 className="skew-y-6 shadow-md">Como trabalhamos</h1></div>
        <div className="flex flex-col md:flex-row gap-10 md:h-72 mt-10 ">
          <div >
            <h1 className="">1º Passo<br/> Briefing</h1>
            <h2>Entendendo suas necessidades</h2>
            <img src={Meeting} className="w-72" alt="" />
            <p className="w-72">
            Tudo começa com uma conversa. Nesta etapa, nos reunimos com você para entender seu negócio, seus objetivos e as funcionalidades que o site deve ter. O briefing é essencial para capturarmos a essência da sua marca e planejar um projeto que atenda às suas expectativas.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={Arrow} className="w-32 md:h-14  rotate-[64deg] md:rotate-0" alt="" />
          </div>
          <div className="mt-20">
            <h1>2º Passo<br />Desenvolvimento</h1>
            <h2>Transformando ideias em realidade</h2>
            <img src={Gears}alt=""/>
            <p  className="w-72" >Com o briefing em mãos, nossa equipe entra em ação. Desenvolvemos o design e a estrutura do seu site, garantindo responsividade, usabilidade e uma navegação intuitiva. Cuidamos de todos os detalhes técnicos para que o site seja ágil, seguro e otimizado para SEO.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:h-72 mt-72 ">
            <div>
              <h1>3º Passo<br/> Aprovação</h1>
              <h2>Seu feedback é fundamental</h2>
              <img src={Meeting} className="w-72" alt="" />
              <p className="w-72">
              Após o desenvolvimento, apresentamos o site para sua avaliação. Você revisa o layout, funcionalidades e conteúdo, e ajustamos conforme necessário para que tudo fique exatamente como você imaginou. Não avançamos sem a sua aprovação total.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={Arrow} className="w-32 md:h-14  rotate-[64deg] md:rotate-0" alt="" />
            </div>
            <div className="mt-20">
              <h1>4º Passo<br />Teste</h1>
              <h2>Garantindo a perfeição</h2>
              <img src={Gears}alt=""/>
              <p  className="w-72" >Antes de ir ao ar, realizamos uma série de testes rigorosos. Verificamos o desempenho em diferentes dispositivos e navegadores, testamos a velocidade de carregamento e eliminamos qualquer erro para garantir que tudo funcione perfeitamente..</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:h-72 mt-40 ">
            <div>
              <h1>5º Passo<br/> Entrega</h1>
              <h2>Seu site no ar!</h2>
              <img src={Meeting} className="w-72" alt="" />
              <p className="w-72">
              Com os testes finalizados e sua aprovação, é hora de lançar o site! Publicamos a plataforma e monitoramos o funcionamento inicial para garantir que esteja tudo rodando perfeitamente. Agora você tem uma presença digital sólida, pronta para gerar resultados
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
