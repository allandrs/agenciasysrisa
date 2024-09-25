import React from "react";

export default function CardProcessos({titulo, subtitulo, img, texto, texto2}) {
    return (
        <>
            <div className="mt-7 flex flex-col items-center">
                <h1 className="font-extrabold">{titulo}</h1>
                <h2>{subtitulo}</h2>
                <img src={img} className="w-[14rem] h-[14rem] " alt="" />
 
                <p className="w-72 text-sm font-semibold text-left ">{texto}</p>
                <p className="w-72 text-sm mt-3 text-left">{texto2}</p>
            </div>            
        </>
    )
}