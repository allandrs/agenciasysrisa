import React from "react";
import Formulario from './formulario'

export default function SecaoFormulario() {
    return (
        <>  
            <div className="flex">
                <div className="w-1/2">
                    <Formulario />
                </div>
                <div className="w-1/2">
                    <img src="https://via.placeholder.com/50" alt="logo" />
                </div>
            </div>
        </>
    )
}