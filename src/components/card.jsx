import React from "react";

export default function Card() {
    return (
        <>
            <div className="border-2 border-gray-500 w-48 h-48 rounded-lg">
                <div className="p-3">
                    <img src="https://via.placeholder.com/40" alt="logo" />
                    <h2>Título</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </>
    )
}