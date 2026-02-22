import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-orange-500 ml-48 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-white">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <Image
          src="https://oabfoundation.org/wp-content/uploads/2024/06/cropped-cropped-cropped-OAB-Foundation-Logo-Design-06-e1738157458667-63x63.png"
          alt="OAB Foundation Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className=" font-semibold text-lg">
          OAB Foundation Dashboard
        </span>
      </div>

      {/* Right Side - Copyright / Links */}
      <div className="text-sm text-center md:text-right">
        &copy; {new Date().getFullYear()} OAB Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;