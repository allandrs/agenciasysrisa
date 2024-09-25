import React, { useState } from "react";

import "../style/header.css";

import DropDownMenu from "./dropdownmenu.jsx";

//images
import Logo from "../../public/sysrisa_logo_edited.png";
import softdeveloper from "../../public/software-developer-6521720-croped.jpg";
import verticalsdeveloper from "../../public/software-developer-6521720-vertical.jpg";
import freela from "../../public/freelance-work-7308505_1920-croped.png";

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header>
        <div className="bg-[#0b112b] relative min-h-[500px] md:min-h-[628px] w-full ">

          <div className="flex bg-[#0b112b] top-0 left-0 right-0 h-15 relative  justify-between shadow-2xl items-center bg-contain border-none">
            
            <a href="/" className="flex-initial ml-2 md:ml-8">
              <img
                src={Logo}
                alt="logo"
                className="flex w-[115px] items-start"
              />
            </a>

            <nav className="hidden md:block flex justify-between items-center">
              <ul className="flex text-white gap-4 place-content-center font-semibold">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Clientes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Planos
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:w-[150px] flex items-center invisible md:visible">
              <button className="bg-[#06d2dd] text-white font-semibold rounded-md w-24 h-7 mr-8 text-sm">
                Contate-nos
              </button>
            </div>

            <div className=" md:hidden">
              <span className="text-white" onClick={() => setOpenMenu((prev) => !prev)}>TESTE</span>
            </div>

            {
              openMenu && <DropDownMenu />
            }



          </div>

          <div className="divHeader w-full h-full relative ">
            <img
              src={softdeveloper}
              className="absolute img-header opacity-[.2] invisible md:visible"
              alt=""
            />
            <img
              src={verticalsdeveloper}
              className="absolute img-header opacity-[.2] visible md:invisible"
              alt=""
            />
            <img
              src={freela}
              className="absolute opacity-[.8] right-20 top-16 invisible md:visible"
              alt=""
            />
            <div className="flex absolute  mx-4 md:mx-8 w-full ">
              <div className="container-copy  ml-[115px] w-[15rem]">
                <h1 className="text  box-h1-decoration-clone  text-xl   font-extrabold ">
                  <span className="box-decoration-clone   text-white transition">
                    Criação de <span className="box-decoration-clone  text-[#06d2dd] transition"> Sites </span>  Personalizados   
                    para Impulsionar Seu 
                    Negócio
                  </span>
                </h1>
                <p className="text-subtitle text-xs text-[#06d2dd] font-semibold">
                  Seu parceiro de confiança para entrega garantida do site ideal.
                </p>
                <div className="button-title flex justify-start">
                  <button className=" mt-6 bg-[#06d2dd] text-white text-sm rounded-md w-28 h-7 font-semibold transition cursor-pointer animate-pulse">
                    Começe agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
