import React from "react";
import { Formulario } from './formulario'

export default function SecaoFormulario() {
    return (
        <>  
            <div className="flex flex-col mx-2 h-[40rem] md:mx-8 flex justify-center items-center">
                <div>
                    <h1 className="text-2xl font-semibold md:text-3xl md:font-normal">Como podemos ajudar você?</h1>
                    <h2 className="text-sm mt-3">Entre em contato conosco. Adorariamos ouvir você.</h2>
                </div>
                <div className="mt-10">
                    <Formulario />
                </div>
                <div className="w-[34px] hidden flex justify-center content-center cente md:block">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                </div>
            </div>
        </>
    )
}