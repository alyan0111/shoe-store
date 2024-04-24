import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaPlus, FaMinus, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sections, setSections] = useState({
    festiveSale: false,
    newArrivals: false,
    men: false,
    women: false,
    exclusiveLine: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    closeDropdowns();
  };

  const toggleDropdown = (key) => {
    setSections((prevSections) => ({
      ...prevSections,
      [key]: !prevSections[key],
    }));
  };

  const closeDropdowns = () => {
    setSections({
      festiveSale: false,
      newArrivals: false,
      men: false,
      women: false,
      exclusiveLine: false,
    });
  };

  const navLinks = [
    { label: "Summer Sale", key: "summerSale", subLinks: ["Men", "Women"] },
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
        className={`flex flex-col md:gap-8 gap-0 md:flex-row md:order-3 ${
          menuOpen
            ? "flex-col absolute top-0 left-0 bg-white h-screen w-[70%] z-20 overflow-y-auto"
            : "hidden md:flex"
        }`}
      >
        <div className="border-b-2 border-b-blue-400 bg-slate-200">
          <li className="text-center my-2 md:hidden ">
            <button onClick={closeDropdowns}>
              Home
            </button>
          </li>
        </div>
        {navLinks.map((link) => (
          <li key={link.key} className="relative group md:mb-0">
            <div className="flex items-center p-4 justify-between">
              <button
                role="menuitem"
                aria-expanded={sections[link.key]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(link.key);
                }}
                className={`hover:text-blue-300  duration-500 ${window.innerWidth < 1024 ? 'cursor-pointer' : ''}`}
              >
                {link.label}
              </button>
              {sections[link.key] ? (
                <FaMinus
                  className=" md:hidden cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              ) : (
                <FaPlus
                  className=" md:hidden cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              )}
            </div>
            <div
              className={`dropdown-content  absolute z-30 ${
                sections[link.key] ? "block " : "hidden"
              } lg:group-hover:block bg-white md:hidden `}
            >
              {link.subLinks.map((subLink) => (
                <button
                  key={subLink}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="block p-2 hover:text-blue-400 w-full lg:w-64 lg:h-20 text-left"
                >
                  {subLink}
                </button>
              ))}
            </div>
            <div
              className={`md:hidden p-4 ${sections[link.key] ? "block " : "hidden"}`}
            >
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink}
                  to={`/${subLink.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={closeDropdowns}
                  className="block hover:text-blue-400 w-full text-left"
                >
                  {subLink}
                </Link>
                
              ))}
            </div>
            <hr className="md:hidden" />
          </li>
        ))}

        {/* Search Button */}
        <li className="p-4 md:hidden">
          <button className="flex items-center gap-2 hover:text-blue-300">
            <FaSearch className="text-xl" />
            Search
          </button>
        </li>
        <hr/>

        {/* Need Help */}
        
        <li className="p-4 md:hidden mt-5">
          <h1 className="font-semibold">Need Help?</h1>
          <div className="text-neutral-600">
          <span className="flex items-center gap-2">
            <FaPhone className="text-lg" />
            <a href="tel:1234567890" className="text-base">123-456-7890</a>
          </span>
          <span className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-lg" />
            <a href="mailto:info@shoesplanet.pk" className="text-base">info@shoesplanet.pk</a>
          </span>
          </div>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 md:order-6">
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
