import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <Image
              src="/NavLogo.png"
              alt="Bytescrafters Logo"
              width={150}
              height={50}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Info.bytecrafters@gmail.com</p>
            <p className="text-sm mb-2">+61 450 150 214</p>
            <p className="text-sm">26 Muyan cct Burwood Victoria 3125</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-sm hover:text-orange-400">
                About
              </a>
              <a href="#services" className="text-sm hover:text-orange-400">
                Services
              </a>
              <a href="#work" className="text-sm hover:text-orange-400">
                Work
              </a>
              <a href="#contact" className="text-sm hover:text-orange-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-orange-400">
                LinkedIn
              </a>
              <a href="#" className="text-sm hover:text-orange-400">
                Twitter
              </a>
              <a href="#" className="text-sm hover:text-orange-400">
                Instagram
              </a>
              <a href="#" className="text-sm hover:text-orange-400">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
