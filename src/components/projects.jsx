import React from "react";

import Portfolio from "../../public/portfolio.png";
import Delivery from "../../public/delivery bebidas.png";
import PSG from "../../public/LP-PSG.png";
import Finances from "../../public/finances.png";
import Dark from "../../public/loginDark.png";

import Card from "./card_projects.jsx";

export default function Projects() {
    return (
        <>
            <div className="ctner h-[2500px] md:h-[1350px] bg-[#0b112b]">
                <div className="flex flex-col items-center pt-16 mx-2 md:mx-4 ">
                    <h1 className="text-3xl font-extrabold text-white text-center">
                    Alguns de <span className="text-[#06d2dd]"> nossos </span>projetos
                    </h1>
                    <br />
                </div>
                <div className="grid gap-8 md:gap-3 grid-cols-1 md:grid-cols-3 place-items-center mt-10">
                    <Card
                        titulo="Site"
                        img={PSG}
                    />
                    <Card
                        titulo="Portfólio"
                        img={Portfolio}
                    />
                    <Card
                        titulo="App delivery"
                        img={Delivery}
                        
                    />
                    <Card
                        titulo="Sistema Financeiro"
                        img={Finances}
                    />
                    <Card
                        titulo="Tela de login dark"
                        img={Dark}
                    />
                </div>
            </div>
        </>
    )
}