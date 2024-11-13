import React from "react";

export default function CardProjects({titulo, img}) {
    return (
        <>
            <div className="border-[0.1px] border-gray-500 w-[280px] h-[34rem] rounded-lg p-3 border-blue-500 bg-[#455497] hover:bg-[#455497]">
                <div className="justify-center items-center text-center content-center align-middle" >
                    <h2 className="font-bold text-[#06d2dd] ">{titulo}</h2>
                    <img  src={img}  className="" alt="logo" />
                    {/* <a href="www.devadr.com/deliverybebidas" target="_blank" ></a> */}
                </div>
            </div>
            
        </>
    )
}