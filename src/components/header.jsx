import React from "react";
import "../style/header.css";
import Image from "../../public/vecteezy_iso.png";
import Logo from "../../public/sysrisa_logo_edited.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {

  return (
    <>
      <header >
        <div className="bg-[#0b112b] relative  min-h-128 w-full ">

          <div className="imagem-header absolute flex center mt-10">
              <img src="/public/geometric-1732847.jpg" className="opacity-20 invisible md:visible w-[600px] h-[350px] md:w-auto md:h-auto" alt="" />
              {/* <img src="/public/code-1262237_1920.png" className="md:invisible" alt="imagem" /> */}
          </div>  
          <div className="imagem-header absolute md:invisible flex center mt-10">
              <img src="/public/code-1262237_1920.png" className="md:invisible opacity-20 w-full h-[472px]" alt="imagem" />
          </div>  

          <div className="flex bg-[#0b112b] top-0 left-0 right-0 h-15 absolute justify-between shadow-2xl items-center ">
            <a href="/" className="flex-initial ml-1 md:ml-8">
              <img src={Logo} alt="logo" className="flex w-[115px] items-start" />
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
                  aria-expanded="false">
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

          <div className="flex ml-3 gap-4 md:ml-8  ">
            <div className="caixa-copy">
              <div className="mt-14">
                  <h1 className="text-3xl font-extrabold pt-6">
                    <span className="box-decoration-clone bg-gradient-to-r from-[#06d2dd] to-indigo-600 text-white mx-1/2 text-nowrap text-[27px] ">
                      Nós criamos o Sistema
                      <br />
                      ideal para seu <br /> negócio
                    </span>
                  </h1>
                  <p className="pt-6 text-white font-semibold">
                    Seu parceiro de confiança para entrega garantida de software.
                  </p>
              </div>
              <div className="flex space-x-2 pt-6">
                  <button className="bg-[#06d2dd] text-white text-sm rounded-md w-28 h-7 font-semibold transition cursor-pointer">
                    Começe agora
                  </button>
              </div>
            </div>
        
          </div>
        </div>
  
      </header>
    </>
  );
}
