import React from "react";
import Logo from "../../public/sysrisa_logo_edited.png";


export default function Footer() {
    return (
        <>
            <div className="h-78 pt-8 bg-[#0b112b] text-white flex flex-col justify-center ">
                <div className="flex justify-start">
                        <img className="h-14 ml-2 md:md-8 flex w-[115px] items-start" src={Logo} alt="logo"/>
                </div>

                <div className="flex ml-2 md:md-8 gap-8 mt-6">
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

                <div className="flex justify-center items-center ml-2 md:md-8 pt-10">
                    <div>
                        <h1 className="text-sm">Desenvolvido por Agência SYSRISA. Todos os direitos reservados © </h1>
                    </div>

                </div>
            </div>
        </>
    )
}