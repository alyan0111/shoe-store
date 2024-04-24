import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

export default function Footer() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    if (openDropdown === section) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(section);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly bg-neutral-100 p-10 mt-20">
        {/* Get in Touch */}
        <div className="space-y-5">
          <div className="flex justify-between items-center md:hidden">
            <h1 className="text-base md:text-lg font-semibold">
              Get in Touch
            </h1>
            <button
              onClick={() => toggleDropdown("touch")}
              className="text-blue-400"
            >
              {openDropdown === "touch" ? "-" : "+"}
            </button>
          </div>
          <div className="hidden md:block space-y-3">
            <h1 className="text-base md:text-lg font-semibold">
              Get in Touch
            </h1>
            <span className="text-neutral-500 flex items-center gap-2">
              <CiMail className="text-base sm:text-xl md:text-2xl" />
              <a
                className="hover:text-blue-400 text-wrap"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@shoeplanet.pk"
              >
                info@shoeplanet.pk
              </a>
            </span>
            <span className="text-neutral-500 flex items-center gap-2">
              <LuPhone className="text-base sm:text-xl md:text-2xl" />
              042-35884223
            </span>
            <span className="text-neutral-500 text-lg flex items-center gap-2">
              <a href="https://www.instagram.com/shoeplanetpk/">
                <FaFacebookF className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]" />
              </a>
              <a href="https://www.instagram.com/shoeplanetpk/">
                <FaInstagram className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]" />
              </a>
            </span>
          </div>
          {openDropdown === "touch" && (
            <div className="md:hidden space-y-3">
              <span className="text-neutral-500 flex items-center gap-2">
                <CiMail className="text-base sm:text-xl md:text-2xl" />
                <a
                  className="hover:text-blue-400 text-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:info@shoeplanet.pk"
                >
                  info@shoeplanet.pk
                </a>
              </span>
              <span className="text-neutral-500 flex items-center gap-2">
                <LuPhone className="text-base sm:text-xl md:text-2xl" />
                042-35884223
              </span>
              <span className="text-neutral-500 text-lg flex items-center gap-2">
                <a href="https://www.instagram.com/shoeplanetpk/">
                  <FaFacebookF className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]" />
                </a>
                <a href="https://www.instagram.com/shoeplanetpk/">
                  <FaInstagram className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px]" />
                </a>
              </span>
            </div>
          )}
        </div>

        {/* Get Help */}
        <div className="space-y-5">
          <div className="flex justify-between items-center md:hidden">
            <h1 className="text-base md:text-lg font-semibold">Get Help</h1>
            <button
              onClick={() => toggleDropdown("help")}
              className="text-blue-400"
            >
              {openDropdown === "help" ? "-" : "+"}
            </button>
          </div>
          <div className="hidden md:block space-y-3">
            <h1 className="text-base md:text-lg font-semibold">Get Help</h1>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Shipping & Delivery
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Return & Exchange
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Terms & Conditions
              </a>
            </div>
          </div>
          {openDropdown === "help" && (
            <div className="md:hidden space-y-3">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Shipping & Delivery
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Return & Exchange
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Policy
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Terms & Conditions
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Information */}
        <div className="space-y-5">
          <div className="flex justify-between items-center md:hidden">
            <h1 className="text-base md:text-lg font-semibold">Information</h1>
            <button
              onClick={() => toggleDropdown("info")}
              className="text-blue-400"
            >
              {openDropdown === "info" ? "-" : "+"}
            </button>
          </div>
          <div className="hidden md:block space-y-3">
            <h1 className="text-base md:text-lg font-semibold">Information</h1>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Reviews
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Size Guide
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                FAQs
              </a>
              <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                Search
              </a>
            </div>
          </div>
          {openDropdown === "info" && (
            <div className="md:hidden space-y-3">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Reviews
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Size Guide
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  FAQs
                </a>
                <a href="#" className="text-neutral-500 hover:text-blue-400 duration-500">
                  Search
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center py-4">
        <p className="text-sm sm:ext-base md:text-lg text-neutral-500 text-wrap">
          Copyright &copy;{new Date().getFullYear()}{" "}
          <span className="text-blue-400">Shoe Planet</span> all rights reserved.
        </p>
      </div>
    </div>
  );
}