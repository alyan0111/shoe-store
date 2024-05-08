import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Featured from "../../components/dropdowns/featured";
import { Link } from "react-router-dom";
import { LiaChartBarSolid } from "react-icons/lia";
import ProductCard from '../../components/product_card/product_card';
import axios from 'axios';



export default function Sale() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [columns, setColumns] = useState(3); 

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('http://localhost:8080/products');
              setProducts(response.data);
          } catch (error) {
              console.error('Failed to fetch products:', error);
          }
      };

      fetchProducts();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Prevent scrolling of the whole page when the sidebar is open
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
  };

  const handleColumnButtonClick = (cols) => {
    setColumns(cols);
  };
  

  const sidebarContent = (
    <div className="h-full overflow-y-auto px-4 ">
      <div className="mb-4 flex flex-col h-60 w-52">
        <h2 className="block text-lg font-semibold underline text-gray-600">
          By Size:
        </h2>
        <div className="overflow-y-scroll">
          {[
            "36/4",
            "37/5",
            "38/6",
            "39/5",
            "39/7",
            "40/6",
            "40/8",
            "41/7",
            "41/9",
            "42/8",
            "43/9",
            "44/10",
            "45/11",
          ].map((size) => (
            <div
              key={size}
              className="hover:text-[#64d3e4] cursor-pointer duration-200"
            >
              <input type="checkbox" name={size} value={size} />
              <label htmlFor={size} className="ml-2 ">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col w-52">
        <h3 className="block text-lg font-semibold underline text-gray-600">
          By Vendor:
        </h3>
        <div>
          {["Marc Kessler", "Reeva", "Regale"].map((vendor) => (
            <div
              key={vendor}
              className="hover:text-[#64d3e4] cursor-pointer duration-200"
            >
              <input type="checkbox" name={vendor} value={vendor} />
              <label htmlFor={vendor} className="ml-2 ">
                {vendor}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col w-52">
        <h4 className="block text-lg font-semibold underline text-gray-600">
          By Type:
        </h4>
        <div>
          {["Accessories", "Men's Footwear", "Women's Footwear"].map((type) => (
            <div
              key={type}
              className="hover:text-[#64d3e4] cursor-pointer duration-200"
            >
              <input type="checkbox" name={type} value={type} />
              <label htmlFor={type} className="ml-2 ">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center relative">
      <Link
        to="/"
        className="text-sm hover:text-[#64d3e4] flex justify-center items-center lg:hidden"
      >
        Categories
        <IoIosArrowDown />
      </Link>
      <div className=" h-32 w-full bg-neutral-500 justify-center flex items-center">
        <h1 className="text-white text-xl text-center justify-center flex font-semibold">
          Summer Sale
        </h1>
      </div>
      <div className="container mt-5">
        <div className="flex justify-between flex-wrap items-center">
          <div className="lg:invisible">
            <button
              className="text-gray-500 flex flex-wrap ml-2 items-center hover:text-[#64d3e4]"
              onClick={toggleSidebar}
            >
              <LiaChartBarSolid />
              Sidebar
            </button>
          </div>
          <div className="flex ml-2 gap-3">
            <button onClick={()=>{handleColumnButtonClick(1)}} className="border-[1px] p-[2px] md:hidden  border-neutral-500">
              <div className="h-5 w-5 bg-neutral-500 hover:bg-black"></div>
            </button>
            <button onClick={()=>{handleColumnButtonClick(2)}} className="border-[1px] p-[2px] flex gap-1 border-neutral-500 group">
  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
</button>

            <button onClick={()=>{handleColumnButtonClick(3)}} className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
            </button>

            <button onClick={()=>{handleColumnButtonClick(4)}} className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
              <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
            </button>
          </div>

          <div>
            <Featured />
          </div>
        </div>
      </div>

      <div className="flex gap-4 ">
        {/* Sidebar */}
        <div
          onClick={toggleSidebar}
          className={`${
            !isSidebarOpen
              ? "hidden"
              : "fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-50"
          }`}
        >
          <div className=" h-screen w-[50%] bg-white flex flex-col">
            <div className="flex justify-between items-center bg-black">
              <h1 className="text-white ml-3"> Sidebar</h1>
              <button
                onClick={toggleSidebar}
                className="mr-2 text-white hover:text-[#64d3e4] text-right font-light text-4xl"
              >
                x
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>

        {/* Sidebar in lg */}
        <div className="hidden lg:block">{sidebarContent}</div>

        {/* Products */}
        <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Products</h1>
        <div className={`grid grid-cols-${columns} gap-4`}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
