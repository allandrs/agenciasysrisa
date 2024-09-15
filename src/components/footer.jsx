import React from "react";
import Logo from "../../public/sysrisa_logo_edited.png";


export default function Footer() {
    return (
        <>
            <div className="h-[850px] md:h-80 pt-8 bg-[#0b112b] text-white flex flex-col justify-center ">

                <div className="flex flex-col ml-10 md:ml-2 md:flex-row gap-8 mt-6">
                    <div>
                            <img className="h-20 flex  items-start" src={Logo} alt="logo"/>
                            <p className="mt-4">Todos os direitos reservados © </p>
                    </div>

                    <div className="flex flex-col text-sm">  
                        <h1 className="text-lg">Serviços</h1>
                        <a href="#">Criação de sites</a>
                        <a href="#">Sistema de agendamentos</a>
                        <a href="#">Criação de sites</a>
                        <a href="#">E-commerce</a>
                    </div>

                    <div className="flex flex-col text-sm">  
                        <h1 className="text-lg">Institucional</h1>
                        <a href="#">Políticas de privacidade</a>
                        <a href="#">Contrato de hospedagem</a>
                        <a href="#">Sobre nós</a>
                        <a href="#">Criação de sites para ONG</a>
                        <a href="#">Registrar domínio</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="flex flex-col ">  
                        <h1 className="text-xl">Contato</h1>
                        <p>EmailImg contato@</p>
                        <p>WppImage (55) 99732-3505</p>
                        <p>HoraImg Segunda à Sexta-feira: 08:00 às 18:00.</p>
                        
                        <div className="flex flex-col gap-1 mt-4">
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

                </div>

                <div className="flex justify-center items-center ml-2 pt-10">
                    <div>
                        <h1 className="text-sm">Desenvolvido por Agência SYSRISA. </h1>
                    </div>

                </div>
            </div>
        </>
    )
}