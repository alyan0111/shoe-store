import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaPlus,
  FaMinus,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authActions";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sections, setSections] = useState({
    summerSale: false,
    newArrivals: false,
    men: false,
    women: false,
    exclusiveLine: false,
  });
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const {email} = useSelector(state => state.auth);
  const dispatch=useDispatch();
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleLogout =()=>{
    dispatch(logout());
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [menuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShippingInfo(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    {
      to: "/sale",
      label: "Summer Sale",
      key: "summerSale",
      subLinkTo: ["/men", "/women"],
      subLinks: ["Men", "Women"],
    },
    {
      to: "/new-arrivals",
      label: "New Arrivals",
      key: "newArrivals",
      subLinkTo: ["/men", "/women"],
      subLinks: ["Men", "Women"],
    },
    {
      to: "/men",
      label: "Men",
      key: "men",
      subLinkTo: ["/men-shoes"],
      subLinks: ["Men Shoes"],
    },
    {
      to: "/women",
      label: "Women",
      key: "women",
      subLinkTo: ["/women-shoes"],
      subLinks: ["Women Shoes"],
    },
    {
      to: "/exclusive-line",
      label: "Exclusive Line",
      key: "exclusiveLine",
      subLinkTo: ["/mk-zen", "/mk-premium"],
      subLinks: ["MK-zen", "MK-premium"],
    },
  ];

  return (
    <div>
      {showShippingInfo && (
        <div className="flex items-center justify-center bg-neutral-500">
          <Link
            to="/"
            className="text-sm py-3 text-white text-center text-wrap"
          >
            Rs.150 Shipping Charges - COD Available Country Wide{" "}
          </Link>
        </div>
      )}
      <nav className="relative px-4 py-2 border-b shadow-lg lg:px-10  flex flex-wrap justify-between items-center">
        {/* Menu Button */}
        <div className="lg:hidden">
          <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Logo */}
        <div className="bg-neutral-700 text-white p-1 text-wrap font-semibold mx-auto lg:mx-0 lg:mb-0 lg:order-2">
          <Link to="/" onClick={closeDropdowns}>
            Shoe Planet
          </Link>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-50"
            onClick={() => {
              toggleMenu();
              closeDropdowns();
            }}
          ></div>
        )}

        {/* Menu Tag */}
        {menuOpen && (
          <div className="bg-white text-white text-center p-2 lg:hidden">
            Menu
          </div>
        )}

        {/* Links */}
        <ul
          className={`flex flex-col lg:gap-8 gap-0 lg:flex-row lg:order-3 ${
            menuOpen
              ? "flex-col absolute top-0 left-0 bg-white h-screen w-[70%] z-50 overflow-y-auto"
              : "hidden lg:flex"
          }`}
        >
          <div className="border-b-2 border-b-[#64d3e4] bg-slate-200">
            <li className="text-center my-2 lg:hidden ">
              <button onClick={closeDropdowns}>Home</button>
            </li>
          </div>
          {navLinks.map((link) => (
            <li key={link.key} className="relative group lg:mb-0">
              <div className="flex items-center border-b lg:border-b-0 lg:hover:bg-white hover:bg-slate-100 p-4 justify-between">
                <Link
                  to={link.to}
                  className={`hover:text-[#64d3e4] duration-300 ${
                    link.key === "summerSale" ? "lg:text-red-500" : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    closeDropdowns();
                  }}
                >
                  {link.label}
                </Link>
                {sections[link.key] ? (
                  <FaMinus
                    className="lg:hidden cursor-pointer"
                    onClick={() => toggleDropdown(link.key)}
                  />
                ) : (
                  <FaPlus
                    className="lg:hidden cursor-pointer"
                    onClick={() => toggleDropdown(link.key)}
                  />
                )}
              </div>

              {/* dropdown in lg */}
              <div
                className={`dropdown-content absolute z-30 ${
                  sections[link.key] ? "block" : "hidden"
                } hidden lg:group-hover:block  shadow-xl bg-white`}
              >
                {link.subLinks.map((subLink, index) => (
                  <Link
                    key={index}
                    to={link.subLinkTo[index]}
                    onClick={closeDropdowns}
                    className="block p-1 mt-2 hover:text-[#64d3e4] duration-300 w-full lg:w-64 lg:h-14 text-left"
                  >
                    {subLink}
                  </Link>
                ))}
              </div>

              {/*sublink sections in menu */}
              <div
                className={`lg:hidden ${
                  sections[link.key] ? "block" : "hidden"
                }`}
              >
                {link.subLinks.map((subLink, index) => (
                  <Link
                    key={index}
                    to={link.subLinkTo[index]}
                    onClick={() => {
                      toggleMenu();
                      closeDropdowns();
                    }}
                    className="block hover:text-[#64d3e4] px-4 py-2 border-b w-full text-left"
                  >
                    {subLink}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          {/* Search Button */}
          <li className="p-4 lg:hidden">
            <button className="flex items-center gap-2 hover:text-[#64d3e4]">
              <FaSearch className="text-xl" />
              Search
            </button>
          </li>
          <hr />

          {/* Need Help */}
          <li className="p-4 lg:hidden mt-5">
            <h1 className="font-semibold">Need Help?</h1>
            <div className="text-neutral-600">
              <span className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <a href="tel:1234567890" className="text-base">
                  123-456-7890
                </a>
              </span>
              <span className="flex items-center gap-2 mt-2">
                <FaEnvelope className="text-lg" />
                <a href="mailto:info@shoesplanet.pk" className="text-base">
                  info@shoesplanet.pk
                </a>
              </span>
            </div>
          </li>
        </ul>

        {/* Icons */}
        { email ?(<div className="flex gap-4 lg:order-6">
          <FaSearch className="text-xl cursor-pointer hover:text-[#64d3e4]" />
          <button className="relative" onClick={toggleCart}>
  <FaShoppingCart className="text-xl font-light cursor-pointer hover:text-[#64d3e4]" />
  <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex justify-center items-center absolute -top-1 -right-1">
    {cartItems.length}
  </span>
</button>
{cartOpen && <Cart />}
        </div>):null}

        {/* login signup buttons */}
        {!email && (
        <div className="flex justify-center space-x-4 mr-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      )}

      {/* Render logout button if user is logged in */}
      {email && (
        <div className="flex justify-center space-x-4 mr-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white h-8 rounded" onClick={handleLogout}>Logout</button>
        </div>
      )}
      </nav>
    </div>
  );
};

export default NavBar;
