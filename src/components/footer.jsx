import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import "../style/chatbox.css";

import Logo from "../../public/sysrisa_logo_edited.png";
import Wpp from "../../public/whatsapp.png";
import Instagram from "../../public/instagram.png";
import Facebook from "../../public/facebook.png";
import Mail from "../../public/mail.png";
import Time from "../../public/time.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-brands fa-instagram } from '@awesome.me/kit-KIT_CODE/icons'


export default function Footer() {
    return (
        <>
            <div className="h-[410px] md:h-[198px]  bg-[#0b112b] text-white flex flex-col justify-center ">

                <div className="flex flex-col justify-center place-items-start mx-10 md:mx-2 md:flex-row gap-6 mt-6">
                    <div>
                            <img className="h-20" src={Logo} alt="logo"/>
                    </div>

                    <div className="flex flex-col ">
                        <h1 className="text-base">Contato</h1>
        
                        <div className="flex gap-1 items-center">
                            <img src={Mail} className="h-6" alt="" />
                            <p className="text-xs">contato@</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={Wpp} className="h-6" alt="" />
                            <p className="text-xs"> (55) 99732-3505</p>
                        </div>
                        <div className="flex gap-1 items-center">
                        <img src={Time} className="h-6" alt="" />
                        <p className="text-xs">Segunda à Sexta-feira: 08:00 às 18:00.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                            <h1 className="text-base">Siga-nos</h1>
                            <div className="flex gap-2">
                                <a href="https://www.instagram.com/agenciasysrisa/"><img src={Instagram} className="h-8" alt="logo" /></a>
                                

                                <a href="https://www.facebook.com/profile.php?id=100075775881308"><img src={Facebook} className="h-8" alt="logo" /></a>
                            </div>
                    </div>
                    {/* <div className="fixed top-[580px] right-[210px] md:top-[500px] md:right-[50px] bg-blue-gray-600 rounded-full w-12 h-12 flex justify-center items-center">
                        <a href="https://wa.me/5555997323505?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20SYSRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente.">
                        
                            <img src={Wpp} alt="" />
                        </a>
                    </div> */}
                </div>

                <div className="footerfooter flex justify-center items-center mt-12 pt-2     border-solid border-gray-500 border-t-[0.1px] border-opacity-30">
                    <div>
                        <h1 className="text-xs text-gray-500 flex-wrap mx-2">Desenvolvido por Agência SYSRISA | Todos os direitos reservados © | Políticas de privacidade  </h1>
                    </div>

                </div>
                <FloatingWhatsApp 
                phoneNumber="55997323505" 
                chatMessage="Olá, como posso ajudar?"
                accountName="Atendimento SYSRISA"
                statusMessage="Respondemos dentro de alguns minutos"
                chatboxHeight={270}
                notificationDelay={60}
                />
            </div>
        </>
    )
}