import React from "react";
import Card from "./card";


export default function Services() {
    return (
        <div className="container flex flex-col h-[40rem] px-24 items-center" >
            <h1 className="font-bold pt-6"><span className="text-blue-500">Empresas</span> que estão crescendo conosco</h1>
            <div className="flex gap-32 justify-center pt-4">
                <img src="./public/Vila-Beer.png" alt="logo" className="h-20"/>
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
            </div>
            <div>
                <div className="flex flex-col items-center pt-16">
                    <h1 className="font-bold text-2xl">Nós fornecemos serviços empresariais</h1>
                    <p className="text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat necessitatibus quo aspernatur alias repudiandae aut libero repellendus in ducimus obcaecati eligendi eveniet.</p>
                </div>

                <div className="flex justify-between pt-6">
                    <Card titulo="Gestão de clientes" img="https://via.placeholder.com/40"/>
                    <Card titulo="Gerenciamento de agendamentos" img="https://via.placeholder.com/40"/>
                    <Card titulo="Estratégia para o Cliente" img="https://via.placeholder.com/40"/>
                    <Card titulo="Análise do marketing" img="https://via.placeholder.com/40"/>
                </div>
            </div>
        </div>
    );
}