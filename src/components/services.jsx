import React from "react";
import Card from "./card_service";
import Vilabeer from "../../public/Vila-Beer.png";
import Elmiz from "../../public/black-clean.png";
import Darkz from "../../public/darkz.png";
import Devfinance from "../../public/devfinance.png";
import Responsive from "../../public/responsive-removebg-preview.png";
import Website from "../../public/site-removebg-preview.png"
import SEO from "../../public/seo-removebg-preview.png"


export default function Services() {
  return (
    <>
      <div className="bg-[#0b112b] h-[110rem] md:h-[44rem] w-full relative border-none">
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
          O seu site <span className="text-[#06d2dd]">se destacando</span> na internet
          </h1>
          <br />

        </div>
        <div className="mx-8">
          <div className="flex flex-col justify-center items-center md:flex-row gap-3 pt-6">
            <Card
              titulo="Responsividade"
              img={Responsive}
              texto1="Mais de 60% dos acessos à internet são feitos por dispositivos móveis. Se o seu site não está perfeitamente ajustado para todos os tamanhos de tela, você está perdendo visitantes e vendas."
            />
            <Card
              titulo="SEO"
              img={SEO}
              texto1="Seu site pode ter potencial, mas sem o SEO correto, ele fica invisível nas pesquisas do google. A otimização de SEO irá atrair o público certo gerando mais conversões."
              // texto2="Corte custos Aumente a produtividade \n continuação"
              // texto3="Corte custos Aumente a produtividade \n continuação"
              // texto4="Corte custos Aumente a produtividade \n continuação"
              />
              <Card
              titulo="Performance"
              img={Website}
              texto1="Cada segundo conta! Sites lentos frustram usuários e, pior ainda, diminuem suas vendas. A otimização de performance garante que seu site carregue em tempo recorde, oferecendo uma navegação rápida e fluida para seus clientes."
              
            />
            <Card
              titulo="Design"
              img={Website}
              texto1=" Navegação simples e agradável para manter seus visitantes por mais tempo, focado na experiência do usuário (UX), assim como um bom design de interface do usuário (UI) é muito importante no sucesso na captação de clientes."
            />
          </div>
        </div>
      </div>
    </>
  );
}
