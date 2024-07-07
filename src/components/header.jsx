import React from "react";
import "../style/header.css"
import image from "../../public/vecteezy_iso.png"

export default function Header() {
    return (
        <header className="bg-red-50 text-black-500 font-semibold min-h-128 w-full">
            <div className="container pt-4 px-24">
                <nav className="flex justify-between items-center pb-14">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                    <ul className="flex gap-4 place-content-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Resultados</a></li>
                        <li><a href="#">Testemunhos</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                    <div className="flex gap-4 place-content-center">
                        <button>Iniciar</button>
                    </div>
                </nav>
                <div className="flex">
                    <div>
                        <div className="w-96">
                            <h1 className="text-3xl font-extrabold pt-6"><span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                            Nós criamos o Sistema<br />
                            ideal para seu <br /> negócio
                            </span></h1>
                            <p className="pt-6">Seu parceiro de confiança para entrega garantida de software.</p>
                        </div>
                        <div className="flex space-x-2 pt-6">
                            <button className="bg-blue-500 text-sm rounded-2xl w-28 h-7">Começe agora</button>
                        </div>
                    </div>
                    <div>
                        <img src={image} className="ml-8" alt="imagem de cabeçalho" />
                    </div>
                </div>
            </div>
        </header>
    );
}