import React from "react";

import Portfolio from "../../public/portfolio.png";

import Card from "./card_projects.jsx";

export default function Projects() {
    return (
        <>
            <div className="ctner h-[690px]">
                <div className="flex flex-col items-center pt-16 mx-2 md:mx-4 mt-10">
                    <h1 className="text-3xl font-extrabold text-blue text-center">
                    Alguns de <span className="text-[#06d2dd]"> nossos </span>projetos
                    </h1>
                    <br />
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-4 place-items-center mt-10">
                    <Card
                        titulo="Página de vendas"
                        img={Portfolio}
                    />
                    <Card
                        titulo="Portfólio"
                        img=""
                    />
                    <Card
                        titulo="App delivery"
                        img=""
                    />
                    <Card
                        titulo="Sistema Financeiro"
                        img=""
                    />
                </div>
            </div>
        </>
    )
}