import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Featured from "../../components/dropdowns/featured";

export default function Sale() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-sm hover:text-[#64d3e4] flex justify-center items-center lg:hidden">
        Categories
        <IoIosArrowDown />
      </div>
      <div className=" h-32 w-full bg-neutral-500 justify-center flex items-center">
        <h1 className="text-white text-xl text-center justify-center flex font-semibold">
          Summer Sale
        </h1>
      </div>
      <div className="container mt-5">
        <div>
          <div className="flex justify-between items-center">
            <div>
                <button>side bar</button>
            </div>
              <div className="flex gap-3">
            <button className="border-[1px] p-[2px] md:hidden  border-neutral-500">
              <div className="h-5 w-5 bg-neutral-500 hover:bg-black"></div>
            </button>
                <button className="border-[1px] p-[2px] flex gap-1 border-neutral-500 group ">
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                </button>

                <button className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                </button>

                <button className="border-[1px] p-[2px] hidden md:flex gap-1 border-neutral-500 group">
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                  <div className="h-5 w-3 bg-neutral-500 group-hover:bg-black duration-500"></div>
                </button>
              </div>

              <div>
                <Featured/>
</div>

            </div>
          </div>
        </div>
      </div>
    
  );
}
