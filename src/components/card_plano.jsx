import React from "react";

export default function CardPlano({titulo, texto, icon}) {
    return (
        <>
            <div className="border-2 border-gray-500 h-96 w-64 rounded-lg">
                <img src="" alt="" />
                <div className="flex p-3">
                    <p>{icon}</p>
                    <h2 className="font-bold text-left pl-2">{titulo}</h2>
                </div>
                    <p className="p-3">{texto}</p>
            </div>
        </>
    )
}