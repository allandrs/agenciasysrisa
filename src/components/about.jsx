import React from "react";
import Aboutus from "../../public/aboutus.png"

export default function About() {
    return (
        <>
            <div className="flex h-[1200px] md:h-[800px] bg-[#0b112b] relative">
                <div className="ml-2 mr-8  flex flex-col justify-center text-center relative">
                    <div className="flex items-center justify-center mb-10">
                        <img src={Aboutus} className="relative w-64 animate-pulse opacity-80" alt="" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#06d2dd]">Sobre nós</h1>
                    <br/>
                    <p className="text-wrap text-white">
                    Na Agência SYSRISA, somos apaixonados por criar experiências digitais que transformam negócios. Com uma equipe de especialistas em design, desenvolvimento sites, nossa missão é entregar sites que não apenas impressionam visualmente, mas também geram resultados concretos.

                    <br /><span className="font-bold text-[#06d2dd]">Acreditamos que um site bem-feito é a base para o sucesso online. Por isso, trabalhamos lado a lado com nossos clientes para entender suas necessidades e traduzir suas ideias em soluções personalizadas, inovadoras e otimizadas para performance. Do design à entrega final, garantimos que cada detalhe esteja alinhado aos seus objetivos de negócio.

                    </span> .
                    </p>
                    <br/>
                    <p className="text-wrap text-white">
                    Por que escolher a [Nome da Agência]?

                    <span className="font-bold text-white flex flex-col text-left ml:20 md:ml-48">
                    <br />🚀 Experiência e inovação: Mais de [X] anos criando sites de alto impacto.
                    <br />🎯 Foco em resultados: Sites que convertem visitantes em clientes.
                    <br />💡 Soluções personalizadas: Cada projeto é único e feito sob medida.
                    <br />🔄 Parceria contínua: Estamos com você em cada etapa, do planejamento à manutenção.
    
                    Estamos prontos para levar seu negócio ao próximo nível com soluções digitais que fazem a diferença.  </span> 
                    </p>
                </div>
            </div>
            

        </>
    )
}
