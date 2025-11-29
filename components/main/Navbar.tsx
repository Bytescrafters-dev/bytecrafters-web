"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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

        <div className="hidden xl:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-gray-300">
            <a
              href="/about-us"
              className={`transition-colors duration-300 cursor-pointer ${
                pathname === "/about-us"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              About Us
            </a>
            <a
              href="/services"
              className={`transition-colors duration-300 cursor-pointer ${
                pathname === "/services"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              Our Services
            </a>
            <a
              href="/projects"
              className={`transition-colors duration-300 cursor-pointer ${
                pathname === "/projects"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              Our Projects
            </a>
            <a
              href="/contact-us"
              className={`transition-colors duration-300 cursor-pointer ${
                pathname === "/contact-us"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
