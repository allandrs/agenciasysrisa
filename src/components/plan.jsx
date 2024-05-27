import React from "react";
import CardPlano from "./card_plano";

export default function Plan() {
    return (
        <>  
            <div className="flex flex-col justify-center h-[36rem] px-24">
                <h1>Planos</h1>
                <div className="flex justify-between">
                    <CardPlano />
                    <CardPlano />
                    <CardPlano />
                </div>
            </div>
        </>
    )
}