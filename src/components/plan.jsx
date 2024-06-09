import React from "react";
import CardPlano from "./card_plano";

export default function Plan() {
    return (
        <>  
            <div className="flex flex-col justify-center h-[36rem] px-24">
                <h1 className="text-xl font-bold text-center mb-12">Nossos Sistemas Web</h1>
                <div className="flex justify-between">
                    <CardPlano titulo="Sistema de reservas para hoteis"/>
                    <CardPlano titulo="App Delivery"/>
                    <CardPlano titulo="Página Web institucional"/>
                </div>
            </div>
        </>
    )
}