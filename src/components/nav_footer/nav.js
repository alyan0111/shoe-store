import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    festiveSale: false,
    newArrivals: false,
    men: false,
    women: false,
    exclusiveLine: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen({ ...dropdownOpen, [key]: !dropdownOpen[key] });
  };

  const closeDropdowns = () => {
    setDropdownOpen({
      festiveSale: false,
      newArrivals: false,
      men: false,
      women: false,
      exclusiveLine: false,
    });
  };

  const navLinks = [
    { label: "Festive Sale", key: "festiveSale", subLinks: ["Men", "Women"] },
    { label: "New Arrivals", key: "newArrivals", subLinks: ["Men", "Women"] },
    { label: "Men", key: "men", subLinks: ["Men Shoes"] },
    { label: "Women", key: "women", subLinks: ["Women Shoes"] },
    { label: "Exclusive Line", key: "exclusiveLine", subLinks: ["MK-zen", "MK-premium"] },
  ];

  return (
    <nav className="relative px-4 py-1 shadow-lg md:px-8 md:py-4 lg:px-16 lg:py-4 flex flex-wrap justify-between items-center">
      {/* Menu Button */}
      <div className="md:hidden">
        <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Logo */}
      <span className="text-lg bg-neutral-700 text-white p-1 font-semibold mx-auto md:mx-0 mb-4 md:mb-0 md:order-2">
        <Link to="/" onClick={closeDropdowns}>
          Shoes Planet
        </Link>
      </span>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => {
            toggleMenu();
            closeDropdowns();
          }}
        ></div>
      )}

      {/* Menu Tag */}
      {menuOpen && (
        <div className="bg-white text-white text-center p-2 md:hidden">
          Menu
        </div>
      )}

      {/* Links */}
      <ul
        className={`flex flex-col lg:gap-4 gap-0 md:flex-row md:order-3 ${
          menuOpen
            ? "flex-col absolute top-0 left-0 bg-white h-screen w-[50%] z-20 overflow-y-auto"
            : "hidden md:flex"
        }`}
      >
        <li className="text-center my-2 md:hidden">
          <Link to="#" className="hover:text-blue-300" onClick={closeDropdowns}>
            Home
          </Link>
        </li>
        <li className="mb-2 md:hidden">
          <div className="bg-blue-300 h-0.5 mx-auto"></div>
        </li>
        {navLinks.map((link) => (
          <li key={link.key} className="relative group mb-4 md:mb-0">
            <div className="flex items-center justify-between">
              <button
                role="menuitem"
                aria-expanded={dropdownOpen[link.key]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(link.key);
                }}
                className={`hover:text-blue-300 ${window.innerWidth < 1024 ? 'cursor-pointer' : ''}`}
              >
                {link.label}
              </button>
              {dropdownOpen[link.key] ? (
                <FaMinus
                  className="text-lg md:hidden cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              ) : (
                <FaPlus
                  className="text-lg md:hidden cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              )}
            </div>
            <div
              className={`dropdown-content absolute z-30 ${
                dropdownOpen[link.key] ? "block " : "hidden"
              } lg:group-hover:block lg:bg-white`}
            >
              {link.subLinks.map((subLink) => (
                <button
                  key={subLink}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="block p-2 hover:bg-gray-300"
                >
                  {subLink}
                </button>
              ))}
            </div>
            <hr className="lg:hidden" />
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex gap-4 md:order-4">
        <FaSearch className="text-xl cursor-pointer hover:text-blue-300" />
        <div className="relative">
          <FaShoppingCart className="text-xl font-light cursor-pointer hover:text-blue-300" />
          <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex justify-center items-center absolute -top-1 -right-1">
            3
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
