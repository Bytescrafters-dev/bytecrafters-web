"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Nav from "./Navbar";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

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
    <div className="w-full h-20 fixed top-0 shadow-lg shadow-[#611d0e]/50 bg-[#42160017] backdrop-blur-md z-50 px-10">
      <div className="text-white w-full h-full flex items-center justify-between m-auto px-2.5">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="handjet font-bold ml-4 text-4xl xl:text-6xl block text-gray-300 uppercase">
            Bytescrafters
          </span>
        </a>

        <div className="space-x-6">
          <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
