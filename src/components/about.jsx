import React from "react";

export default function About() {
    return (
        <>
            <div className="flex items-center justify-betwen h-96 px-24 bg-red-50">
                <div>
                    <img src="./public/managers-grow.png" className="w-[500px]" alt="logo" />
                </div>
                <div className="w-[400px]">
                    <h1 className="text-3xl font-bold text-black">Sobre nós</h1>
                    <br />
                    <p className="text-wrap text-gray-500">
                    Tudo começa com a <span className="font-bold">compreensão do problema e dos objetivos do seu negócio.</span> Se você tiver código existente, concluímos uma aquisição. Caso contrário, criamos um plano para construir seu aplicativo do zero.
                    </p>
                    <br />
                    <p className="text-wrap text-gray-500">
                    A partir daí, selecionamos e designamos membros de confiança da nossa equipe para o seu projeto. Depois de construir uma equipe de produtos coesa, <span className="font-bold">fornecemos serviços abrangentes de desenvolvimento de sistemas</span> sob demanda.
                    </p>
                </div>
            </div>
        </>
    )
}