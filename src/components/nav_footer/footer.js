import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

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
    <div className="pb-3">
      <div className="flex flex-col md:flex-row justify-evenly gap-4 bg-neutral-100 p-7 sm:p-10 mt-20">
        {/* Get in Touch */}
        <div className="space-y-5">
          <div className="flex justify-between items-center md:hidden">
            <h1 className="text-base md:text-lg font-semibold">
              Get in Touch
            </h1>
            <button
              onClick={() => toggleDropdown("touch")}
              className="text-[#64d3e4]"
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
                className="hover:text-[#64d3e4] text-wrap"
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
                  className="hover:text-[#64d3e4] text-wrap"
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
              className="text-[#64d3e4]"
            >
              {openDropdown === "help" ? "-" : "+"}
            </button>
          </div>
          <div className="hidden md:block space-y-3">
            <h1 className="text-base md:text-lg font-semibold">Get Help</h1>
            <div className="flex flex-col gap-3">
              <Link to="/shipping-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Shipping & Delivery
              </Link>
              <Link to="/exchange-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Return & Exchange Policy
              </Link>
              <Link to="/privacy-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
          {openDropdown === "help" && (
            <div className="md:hidden space-y-3">
              <div className="flex flex-col gap-3">
              <Link to="/shipping-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Shipping & Delivery
              </Link>
              <Link to="/exchange-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Return & Exchange Policy
              </Link>
              <Link to="/privacy-policy" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Terms & Conditions
              </Link>
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
              className="text-[#64d3e4]"
            >
              {openDropdown === "info" ? "-" : "+"}
            </button>
          </div>
          <div className="hidden md:block space-y-3">
            <h1 className="text-base md:text-lg font-semibold">Information</h1>
            <div className="flex flex-col gap-3">
              <Link to="reviews" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Reviews
              </Link>
              <Link to="/size-guid" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Size Guide
              </Link>
              <Link to="faqs" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                FAQs
              </Link>
              <Link to="search" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Search
              </Link>
            </div>
          </div>
          {openDropdown === "info" && (
            <div className="md:hidden space-y-3">
              <div className="flex flex-col gap-3">
              <Link to="reviews" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Reviews
              </Link>
              <Link to="/size-guid" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Size Guide
              </Link>
              <Link to="faqs" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                FAQs
              </Link>
              <Link to="search" className="text-neutral-500 hover:text-[#64d3e4] duration-500">
                Search
              </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center py-4">
        <p className="text-sm sm:ext-base md:text-lg text-neutral-500 text-wrap">
          Copyright &copy;{new Date().getFullYear()}{" "}
          <span className="text-[#64d3e4]">Shoe Planet</span> all rights reserved.
        </p>
      </div>
    </div>
  );
}