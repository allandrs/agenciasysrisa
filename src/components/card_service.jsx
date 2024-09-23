import React from "react";

export default function CardService({titulo, img, texto1, texto2, texto3, texto4}) {
    return (
        <>
            <div className="border-[0.1px] border-gray-500 w-[215px] min-h-[20rem] rounded-lg p-3 border-blue-500 bg-[#0d1537] hover:bg-[#455497]">
                <div>
                    <img src={img} className="max-h-20 justify-start" alt="logo" />
                    <h2 className="font-bold pt-4 text-[#06d2dd] ">{titulo}</h2>
                    <p className="text-white font-semibold text-xs mt-2">{texto1}</p>
                    <p className="text-white text-xs mt-2">{texto2}</p>
                    <p className="text-white text-xs mt-2">{texto3}</p>
                    <p className="text-white text-xs mt-2">{texto4}</p>
                </div>
            </div>
            
        </>
    )
}