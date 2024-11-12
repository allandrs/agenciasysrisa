import React from "react";

import Portfolio from "../../public/portfolio.png";

import Card from "./card_projects.jsx";

export default function Projects() {
    return (
        <>
            <div className="ctner h-[690px]">

                <div className="grid gap-5 grid-cols-1 md:grid-cols-3 place-items-center mt-10">
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
                    <Card
                        titulo="Site"
                        img=""
                    />
                </div>
            </div>
        </>
    )
}