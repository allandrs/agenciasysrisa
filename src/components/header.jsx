import React from "react";


export default function Header() {
    return (
        <header className="bg-red-50 text-green-500 h-96 w-full">
            <div className="container">
                <nav className="flex justify-between p-4">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                    <ul className="flex gap-4 place-content-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">O que fazemos</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Testemunhos</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                    <div className="flex gap-4 place-content-center">
                        <button>Vamos comerçar</button>
                    </div>

                </nav>
            </div>
        </header>
    );
}