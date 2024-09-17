import React from "react";

export default function CardProcessos({titulo, subtitulo, img, texto}) {
    return (
        <>
            <div>
                <h1 className="font-extrabold">{titulo}</h1>
                <h2>{subtitulo}</h2>
                <img src={img} className="w-[15rem] my-1" alt="" />
                <div className="group">
                    <button className="text-black border-2 border-cyan-700 invisible hover:visible">Hello</button>
                </div>
                <p className="w-72 text-sm">{texto}</p>
            </div>            
        </>
    )
}