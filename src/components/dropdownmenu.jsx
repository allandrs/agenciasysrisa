import React from 'react'
import "../style/dropDownMenu.css"

export default function DropDownMenu() {
    return (
        <>
            <div className='flex flex-col dropDownMenu md:hidden z-40'>
                <ul className='flex flex-col gap-4'>
                    <a href="#">Home</a>
                    <a href="#services">Serviços</a>
                    <a href="#about">Sobre nós</a>
                    <a href="#comofunciona">Como funciona</a>
                    <a href="#footer">Contato</a>
                    {/* <li><a href="/">Home</a></li>
                    <li>Serviços</li>
                    <li>Sobre nós</li>
                    <li>Como funciona</li> */}
                </ul>
            </div>
        </>
    )
}