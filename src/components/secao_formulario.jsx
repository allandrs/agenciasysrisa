import React from "react";
import { Formulario } from './formulario'

export default function SecaoFormulario() {
    return (
        <>  
            <div className="flex flex-col h-[40rem] flex justify-center items-center content-center relative bg-white w-full my-20">
                {/* <img src="/public/freelance-work-7308505_1920.png" className='absolute opacity-9' alt="" />  */}
                <div className="flex flex-col justify-center items-center mx-1">
                    <h1 className="text-2xl font-semibold md:text-3xl md:font-normal">Como podemos ajudar você?</h1>
                    <h2 className="text-sm mt-3">Entre em contato conosco. Adorariamos ouvir você.</h2>
                </div>
                <div className="mt-10 ">
                    <Formulario />
                </div>
            </div>
        </>
    )
}