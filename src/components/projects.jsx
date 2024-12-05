import React from "react";



// import Card from "./card_projects";
import Carousel from "./carousel"

export default function Projects() {
    return (
        <>
            <div id="portfolio" className="ctner h-[500px] md:h-[450px] bg-[#0b112b]">
                <div className="flex flex-col items-center pt-16 mx-2 md:mx-4 ">
                    <h1 className="text-3xl font-extrabold text-white text-center">
                    Alguns de <span className="text-[#06d2dd]"> nossos </span>projetos
                    </h1>
                    <br />
                </div>
                <div>
                    <Carousel />
                </div>
            </div>
        </>
    )
}