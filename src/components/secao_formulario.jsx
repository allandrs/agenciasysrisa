import React from "react";
import { Formulario } from './formulario'

export default function SecaoFormulario() {
    return (
        <>  
            <div className="mx-2 md:mx-8 flex justify-center">
                <div>
                    <Formulario />
                </div>
                <div className="w-[34px] hidden flex justify-center content-center cente md:block">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                </div>
            </div>
        </>
    )
}