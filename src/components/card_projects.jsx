import React from "react";

export default function CardProjects({titulo, img}) {
    return (
        <>
            <div className="border-[0.1px] border-gray-500 w-[200px] min-h-[20rem] rounded-lg p-3 border-blue-500 bg-[#0d1537] hover:bg-[#455497]">
                <div>
                    <h2 className="font-bold pt-4 text-[#06d2dd] ">{titulo}</h2>
                    <img src={img} className="max-h-20 justify-start" alt="logo" />

                </div>
            </div>
            
        </>
    )
}