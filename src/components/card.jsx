import React from "react";

export default function Card({titulo, img}) {
    return (
        <>
            <div className="border-2 border-gray-500 w-48 h-56 rounded-lg border-blue-500">
                <div className="p-3">
                    <img src={img} alt="logo" />
                    <h2 className="font-bold pt-4">{titulo}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </>
    )
}