import React from "react";
import "../style/header.css"
import Image from "../../public/vecteezy_iso.png"

export default function Header() {
    return (
        <header className="bg-red-50 text-black-500 font-semibold min-h-128 w-full flex justify-center">
            <div className="container pt-4 w-full">
                <div className="flex justify-between">

                    <div className="flex-initial">
                        <img src="../../public/beewa1-removebg-preview.png" alt="logo" className="flex w-36 h-36 items-start" />
                    </div>
                    <nav className="flex justify-between items-center">
                            <ul className="flex gap-4 place-content-center">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Testemunhos</a></li>
                            <li><a href="#">Planos</a></li>
                            <li><a href="#">Contatos</a></li>
                        </ul>
                    </nav>
                    
                    <div>                      
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="">
                            <h1 className="text-3xl font-extrabold pt-6"><span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2  text-nowrap text-[27px] ">
                            Nós criamos o Sistema<br />
                            ideal para seu <br /> negócio
                            </span></h1>
                            <p className="pt-6">Seu parceiro de confiança para entrega garantida de software.</p>
                        </div>
                        <div className="flex space-x-2 pt-6">
                            <button className="bg-blue-500 text-sm rounded-2xl w-28 h-7 cursor-pointer">Começe agora</button>
                        </div>
                    </div>
                    <div>
                        <img src={Image} className="" alt="imagem de cabeçalho" />
                    </div>
                </div>
            </div>
        </header>
    );
}