import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaPlus, FaMinus, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBottom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sections, setSections] = useState({
    summerSale: false,
    newArrivals: false,
    men: false,
    women: false,
    exclusiveLine: false,
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [menuOpen]);

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
      summerSale: false,
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
    <nav className="fixed bottom-0 bg-white w-full px-4 py-1 shadow-lg lg:hidden flex justify-between items-center">
      {/* Menu Button */}
      <div className="lg:hidden cursor-pointer flex flex-col items-center justify-center">
        <FaBars className="text-xl " onClick={toggleMenu} />
        <p className="text-xs overflow-hidden font-medium">Menu</p>
      </div>

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
        <div className="bg-white text-white text-center p-2">
          Menu
        </div>
      )}
      
      {/* Links */}
      <ul
        className={`flex flex-col gap-0 ${
          menuOpen
            ? " absolute bottom-0 left-0 bg-white h-screen w-[70%] z-20 overflow-y-auto"
            : "hidden"
        }`}
      >
        <div className="border-b-2 border-b-[#64d3e4] bg-slate-200">
          <li className="text-center my-2">
            <button onClick={closeDropdowns}>Home</button>
          </li>
        </div>
        {navLinks.map((link) => (
          <li key={link.key} className="relative group">
            <div className="flex items-center p-4 justify-between">
              <button
                role="menuitem"
                aria-expanded={sections[link.key]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(link.key);
                }}
                className={`hover:text-[#64d3e4] duration-500 ${window.innerWidth < 1024 ? 'cursor-pointer' : ''}`}
              >
                {link.label}
              </button>
              {sections[link.key] ? (
                <FaMinus
                  className=" cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              ) : (
                <FaPlus
                  className=" cursor-pointer"
                  onClick={() => toggleDropdown(link.key)}
                />
              )}
            </div>
         
            <div
              className={`md:hidden p-4 ${sections[link.key] ? "block" : "hidden"}`}
            >
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink}
                  to={`/${subLink.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={closeDropdowns}
                  className="block hover:text-[#64d3e4] w-full text-left"
                >
                  {subLink}
                </Link>
              ))}
            </div>
            <hr />
          </li>
        ))}

        {/* Search Button */}
        <li className="p-4">
          <button className="flex items-center gap-2 hover:text-[#64d3e4]">
            <FaSearch className="text-xl" />
            Search
          </button>
        </li>
        <hr />

        {/* Need Help */}
        <li className="p-4 mt-5">
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
      <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="relative">
        <FaShoppingCart className="text-xl font-light hover:text-[#64d3e4]" />
        <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex justify-center items-center absolute -top-1 -right-1">
          3
        </span>
      </div>
      <p className="text-xs font-medium">Cart</p>

      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <FaSearch className="text-xl hover:text-[#64d3e4]" />
        <p className="text-xs font-medium">Search</p>
      </div>
    </nav>
  );
};

export default NavBottom;
