import React from 'react'
import "../style/dropDownMenu.css"

export default function DropDownMenu() {
    return (
        <>
            <div className='flex flex-col dropDownMenu'>
                <ul className='flex flex-col gap-4'>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Clientes</li>
                    <li>Sobre nós</li>
                    <li>Planos</li>
                </ul>
            </div>
        </>
    )
}