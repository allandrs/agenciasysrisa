import React from "react";
import Card from "./card";

export default function Services() {
    return (
        <div className="container flex flex-col h-96 px-24 items-center" >
            <h1 className="font-bold pt-6">texto aqui</h1>
            <div className="flex gap-32 justify-center">
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />
                <img src="https://via.placeholder.com/50" alt="logo" />

            </div>
            <div>
                <h1>SERVIÇOS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat necessitatibus quo aspernatur alias repudiandae aut libero repellendus in ducimus obcaecati eligendi eveniet molestiae exercitationem suscipit animi quidem architecto est.</p>
                <div className="flex justify-between">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </div>
    );
}