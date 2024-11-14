import React from "react";

export default function CardService({titulo, img, texto1, texto2, texto3, texto4}) {
    return (
        <>
            <div className="border-[0.1px] border-gray-500 w-[215px] min-h-[20rem] rounded-lg p-3 border-blue-500 bg-white hover:bg-[#0d1537]">
                <div className="text-center place-items-center">
                    <div className="bg-[#06d2dd] rounded-full w-30 h-30">

                        <img src={img} className="max-h-20 p-3 " alt="logo" />
                    </div>
                    <h2 className="font-bold pt-4 text-[#06d2dd] ">{titulo}</h2>
                    <p className="text-[#0d1537] hover:text-white font-semibold text-xs mt-2">{texto1}</p>
                    <p className="text-[#0d1537] hover:text-white text-xs mt-2">{texto2}</p>
                    <p className="text-[#0d1537] hover:text-white text-xs mt-2">{texto3}</p>
                    <p className="text-[#0d1537] hover:text-white text-xs mt-2">{texto4}</p>
                </div>
            </div>
            
        </>
    )
}