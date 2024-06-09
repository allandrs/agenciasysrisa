import React from "react";

export default function About() {
    return (
        <>
            <div className="flex items-center justify-betwen h-96 px-24 bg-red-50">
                <div>
                    <img src="./public/managers-grow.png" className="w-[500px]" alt="logo" />
                </div>
                <div className="w-[400px]">
                    <h1 className="text-xl font-bold">Seu negócio crescendo mais rápido</h1>
                    <h2 className="text-ms font-bold text-orange-500">Teste</h2>
                    <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio quas quibusdam, corrupti neque eaque? Accusantium quibusdam tempore minima placeat laboriosam? Minus in nulla hic temporibus sunt vero magni rem?</p>
                </div>
            </div>
        </>
    )
}