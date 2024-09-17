import React from "react";
import "../style/header.css";
import Logo from "../../public/sysrisa_logo_edited.png";
import softdeveloper from "../../public/software-developer-6521720-croped.jpg";
import verticalsdeveloper from "../../public/software-developer-6521720-vertical.jpg";
import freela from "../../public/freelance-work-7308505_1920-croped.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
  return (
    <>
      <header className="border-none">
        <div className="bg-[#0b112b] relative min-h-[500px] md:min-h-[628px] w-full border-none ">

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

            <div className="w-[150px] flex items-center invisible md:visible">
              <button className="bg-[#06d2dd] text-white font-semibold rounded-md w-24 h-7 mr-8 text-sm">
                Contate-nos
              </button>
            </div>

            <Menu as="div" className="inline-block text-left md:hidden mr-2">
              <div>
                <MenuButton
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Serviços
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Clientes
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Sobre nós
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Planos
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
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
            <div className="flex  gap-4 mx-4 md:mx-8   w-full h-full">
              <div className="container-copy  absolute mx-2">
                <h1 className="text  box-h1-decoration-clone text-3xl font-extrabold ">
                  <span className="box-decoration-clone   text-white mx-1/2 text-nowrap text-[27px] transition">
                    Criação de <span className="box-decoration-clone  text-[#06d2dd] mx-1/2 text-nowrap text-[27px] transition"> Sites </span> Personalizados    
                    <br />
                    para Impulsionar Seu <br /> 
                    Negócio
                  </span>
                </h1>
                <p className="text-subtitle  text-[#06d2dd] font-semibold">
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
