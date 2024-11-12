import React, { useState } from "react";

import "../style/header.css";

import DropDownMenu from "./dropdownmenu.jsx";

//images
import Logo from "../../public/drisa_logo.png";
import softdeveloper from "../../public/software-developer-6521720-croped.jpg";
import verticalsdeveloper from "../../public/software-developer-6521720-vertical.jpg";
import freela from "../../public/freelance-work-7308505_1920-croped.png";
import dropdown from "../../public/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const Header = () => {

  // const scrollToService = () => {
  //   if (refToServices.current) {
  //     refToServices.current.scrollIntoView();
  //   }
  // };

  // const scrollToAbout = () => {
  //   if (refToAbout.current) {
  //     refToAbout.current.scrollIntoView();
  //   }
  // };

  

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
                    href="#services"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                    
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                    
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#comofunciona"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Como funciona
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Contato
                  </a>
                </li> */}
              </ul>
            </nav>

            <div  className="md:w-[150px] flex items-center invisible md:visible">
              <a href="https://wa.me/5555997323505?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank" className="bg-[#06d2dd] text-white font-semibold rounded-md pl-1 w-28 h-7 mr-8 text-sm flex items-center justify-center">
                Contate-nos
              </a>
            </div>

            <div className=" md:hidden">
              <span className="text-white" onClick={() => setOpenMenu((prev) => !prev)}><img src={dropdown} className="mr-2" alt="menu"></img></span>
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
            <div className="flex absolute  mx-4 md:mx-8 mt-14">
              <div className="container-copy  ml-[7rem] md:ml-[19rem] w-[15rem] md:w-[40rem]">
                <h1 className="text  box-h1-decoration-clone  text-xl md:text-2xl   font-extrabold w-full">
                  <span className="box-decoration-clone   text-white transition">
                  Na DRISA, desenvolvemos  <span className="box-decoration-clone  text-[#06d2dd] transition"> sites, landing pages e lojas virtuais </span>   
                    <br />focados em resultado.<br />Pronto para se destacar e aumentar suas vendas?
                  </span>
                </h1>
                <p className="text-subtitle text-[12px] md:text-sm text-[#06d2dd] font-semibold mt-4 w-full">
                  Seu parceiro de confiança para entrega garantida de resultados.
                </p>
                <div className="button-title flex justify-start">
                  <button className=" mt-6 bg-[#06d2dd] text-white text-xs rounded-md w-28 h-7 font-semibold transition cursor-pointer animate-pulse">
                    <a href="https://wa.me/5555997323505?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank">Começe agora</a>
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

export default Header