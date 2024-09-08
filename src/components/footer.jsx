import React from "react";

export default function Footer() {
    return (
        <>
            <div className="h-96 pt-16 bg-[#0b112b] text-white">
                <div className="w-14">
                        <img src="https://via.placeholder.com/40" alt="" />
                </div>
                <div className="flex justify-between px-24">
                    <div className="flex flex-col text-sm">  
                        <h1 className="text-xl">Serviços</h1>
                        <a href="#">Criação de sites</a>
                        <a href="#">Sistema de agendamentos</a>
                        <a href="#">Criação de sites</a>
                        <a href="#">E-commerce</a>
                    </div>
                    <div className="flex flex-col text-sm">  
                        <h1 className="text-xl">Institucional</h1>
                        <a href="#">Políticas de privacidade</a>
                        <a href="#">Contrato de hospedagem</a>
                        <a href="#">Sobre nós</a>
                        <a href="#">Criação de sites para ONG</a>
                        <a href="#">Registrar domínio</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="flex flex-col text-sm">  
                        <h1 className="text-xl">Contato</h1>
                        <p>EmailImg contato@</p>
                        <p>WppImage (55) 99732-3505</p>
                        <p>HoraImg Segunda à Sexta-feira: 08:00 às 18:00.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                        <p>Siga-nos</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="https://via.placeholder.com/50" alt="logo" />
                            <img src="https://via.placeholder.com/50" alt="logo" />
                            <img src="https://via.placeholder.com/50" alt="logo" />
                        </div>
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