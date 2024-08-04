import React from "react";

export default function Footer() {
    return (
        <>
            <div className="h-96 pt-16 bg-gray-500">
                <div className="w-14">
                        <img src="https://via.placeholder.com/40" alt="" />
                </div>
                <div className="flex justify-between px-24">
                    <div className="flex flex-col">  
                        <h2>Título</h2>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                    </div>
                    <div className="flex flex-col">  
                        <h2>Título</h2>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                        <p>Siga-nos</p>
                        </div>
                        <img src="https://via.placeholder.com/50" alt="logo" />
                        <img src="https://via.placeholder.com/50" alt="logo" />
                        <img src="https://via.placeholder.com/50" alt="logo" />
                    </div>  
                </div>
                <div className="flex justify-between items-center px-24 pt-10">
                    <div>
                        <h1>All rights reserved</h1>
                    </div>
 
                </div>
            </div>
        </>
    )
}