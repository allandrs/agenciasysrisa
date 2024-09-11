import React from "react";
import Fundo from "/public/geometric-1732847.jpg";


export default function Clientes() {
    return (
        <>
            <div className="flex justify-center h-96 bg-[#0b112b] relative">
                <img src={Fundo} className="absolute opacity-[.4]" alt="" />
                <h1 className="text-white absolute">WHAT OUR CLIENTS SAY</h1>
            </div>
        </>
    )
}