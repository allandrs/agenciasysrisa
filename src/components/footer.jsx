import React from "react";
import Logo from "../../public/sysrisa_logo_edited.png";
import Wpp from "../../public/whatsapp.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-brands fa-instagram } from '@awesome.me/kit-KIT_CODE/icons'


export default function Footer() {
    return (
        <>
            <div className="h-[460px] md:h-[200px]  bg-[#0b112b] text-white flex flex-col justify-center ">

                <div className="flex flex-col justify-center place-items-start mx-10 md:mx-2 md:flex-row gap-6 mt-6">
                    <div>
                            <img className="h-20 flex  items-start" src={Logo} alt="logo"/>
                    </div>

                    <div className="flex flex-col ">  
                        <h1 className="text-lg">Contato</h1>
                        <p className="text-sm">EmailImg contato@</p>
                        <p className="text-sm">WppImage (55) 99732-3505</p>
                        <p className="text-sm">HoraImg Segunda à Sexta-feira: 08:00 às 18:00.</p>
                    </div>

                    <div className="flex flex-col gap-1">
                            <h1 className="text-lg">Siga-nos</h1>
                            <div className="flex gap-2">
                                <img src="https://via.placeholder.com/50" alt="logo" />
                                
  
                                {/* <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#ffffff",}} /> */}


                                <img src="https://via.placeholder.com/50" alt="logo" />
                                <img src="https://via.placeholder.com/50" alt="logo" />
                            </div>
                    </div>
                    <div className="fixed top-[580px] right-[210px] md:top-[500px] md:right-[50px] bg-blue-gray-600 rounded-full w-12 h-12 flex justify-center items-center">
                        <img src={Wpp} alt="" />
                    </div>
                </div>

                <div className="footerfooter flex justify-center items-center mt-12 pt-2     border-solid border-gray-500 border-t-[0.1px] border-opacity-30">
                    <div>
                        <h1 className="text-xs text-gray-500 flex-wrap mx-2">Desenvolvido por Agência SYSRISA | Todos os direitos reservados © | Políticas de privacidade  </h1>
                    </div>

                </div>
            </div>
        </>
    )
}