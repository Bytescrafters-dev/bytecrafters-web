"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Nav from "./Navbar";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="w-full h-20 fixed top-0 shadow-lg shadow-[#611d0e]/50 bg-[#42160017] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="text-white w-full h-full flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 grow ml-4 justify-between md:grow-0 md:ml-0">
          <a href="/" className="flex items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="hidden md:block cursor-pointer hover:animate-slowspin"
            />
            <span className="handjet font-bold ml-0 md:ml-4 text-2xl md:text-4xl xl:text-6xl text-gray-300 uppercase">
              Bytescrafters
            </span>
          </a>
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className={`md:hidden cursor-pointer ${isOpen && "hidden"}`}
          />
        </div>

        <div className="space-x-6">
          <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
