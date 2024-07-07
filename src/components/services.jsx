import React from "react";
import Card from "./card";
import Vilabeer from "../../public/Vila-Beer.png"

export default function Services() {
    return (
        <div className="container flex flex-col h-[40rem] px-24 items-center" >
            <h1 className="font-bold pt-6"><span className="text-blue-500">Empresas</span> que estão crescendo conosco</h1>
            <div className="flex gap-32 justify-center pt-4">
                <img src={Vilabeer} alt="logo" className="h-20"/>
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
            </div>
            <div>
                <div className="flex flex-col items-center pt-16">
                <h1 className="text-3xl font-bold text-black">O que <span className="text-orange-500">nós fazemos.</span></h1>
                <br />
                <p className="text-wrap text-gray-500">
                    Tudo começa com a <span className="font-bold">compreensão do problema e dos objetivos do seu negócio.</span> Se você tiver código existente, concluímos uma aquisição. Caso contrário, criamos um plano para construir seu aplicativo do zero.
                </p>
                <br />
                <p className="text-wrap text-gray-500">
                    A partir daí, selecionamos e designamos membros de confiança da nossa equipe para o seu projeto. Depois de construir uma equipe de produtos coesa, <span className="font-bold">fornecemos serviços abrangentes de desenvolvimento de sistemas</span> sob demanda.
                </p>
                </div>

                <div className="flex justify-between pt-6">
                    <Card titulo="Gerencie seus clientes e produtos" img="https://via.placeholder.com/40" texto="Corte custos Aumente a produtividade"/>
                    <Card titulo="Gerencie agendamentos" img="https://via.placeholder.com/40"/>
                    <Card titulo="Relatórios de vendas" img="https://via.placeholder.com/40"/>
                    <Card titulo="Mensagens e lembretes automáticos" img="https://via.placeholder.com/40"/>
                    <Card titulo="Receba pagamentos no seu site" img="https://via.placeholder.com/40"/>
                </div>
            </div>
        </div>
    );
}