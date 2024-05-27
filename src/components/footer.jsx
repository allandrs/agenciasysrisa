import React from "react";

export default function Footer() {
    return (
        <>
            <div className="h-96 pt-32">
                <div className="flex justify-between px-24">
                    <div className="flex flex-col w-64">
                        <img src="#" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dicta, consectetur nisi placeat</p>
                    </div>
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
                    <div className="flex flex-col">   
                        <h2>Título</h2>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                    </div>
                </div>
                <div className="flex justify-between items-center px-24 pt-6">
                    <div>
                        <h1>All rights reserved</h1>
                    </div>
                    <div className="flex gap-1">
                        <img src="https://via.placeholder.com/50" alt="logo" />
                        <img src="https://via.placeholder.com/50" alt="logo" />
                        <img src="https://via.placeholder.com/50" alt="logo" />
                    </div>  
                </div>
            </div>
        </>
    )
}