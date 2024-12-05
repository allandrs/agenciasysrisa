import React from "react";

export default function CardCarousel({img, link}) {
    return (
        <>
            <div className='flex flex-col justify-end items-center h-60 bg-white p-3 rounded-md'>
                <img src={img} ></img>
                <div className='flex flex-row justify-center rounded-md text-center mt-2 bg-gray-300 hover:bg-[#06d2dd] cursor-pointer w-14'>
                    <a href={link} target="_blank" className="text-xs">Confira</a>
                </div>
            </div>
        </>
    )
}