import React from "react";


export default function Header() {
    return (
        <header className="bg-red-50 text-black-500 font-semibold h-96 w-full">
            <div className="container pt-4 px-24">
                <nav className="flex justify-between items-center pb-14">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                    <ul className="flex gap-4 place-content-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Testemunhos</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                    <div className="flex gap-4 place-content-center">
                        <button>Vamos comerçar</button>
                    </div>
                </nav>
                <div className="">
                    <div className="w-96">
                        <h1 className="text-3xl font-extrabold">Nós somos uma Agência  de Softwares de Gestão</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor possimus voluptate? Tempore quam cumque fugiat vero, iste eos doloribus dolore quas nobis. Quaerat laboriosam minus perspiciatis iste quas rem.</p>
                    </div>
                    <div className="flex space-x-2 ">
                        <button className="bg-gray-500">button1</button>
                        <button className="bg-gray-500">button2</button>
                    </div>
                </div>
            </div>
        </header>
    );
}