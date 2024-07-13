"use client";
import React, { useState, useContext } from "react";
import { FaLeftRight } from "react-icons/fa6";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Sider = () => {
  const [toggle, setToggle] = useState(false);
  const items = [
    { id: 1, name: "Hero" },
    { id: 2, name: "Section1" },
    { id: 3, name: "Section2" },
    { id: 4, name: "Section3" },
  ];
  return (
    <div>
      <div
        className={`absolute border-r border-white bg-pink-800 transition-all ease-linear duration-[200ms] ${
          toggle ? "w-[40%] md:w-[10%]" : "w-[7%] md:w-[2%] "
        }`}
      >
        <div
          className={
            toggle ? "flex justify-center items-center mt-3" : "hidden"
          }
        >
          <h1 className="font-semibold text-[12px] text-white">
            Gomenti WorkSpace
          </h1>
        </div>
        <div
          className={`relative h-[50px]  flex items-center justify-end ${
            toggle && "border-b"
          }  w-full`}
        >
          <div className="rounded-full mr-[-10px] bg-gray-200 w-[25px] h-[25px] flex justify-center items-center">
            {toggle ? (
              <>
                <MdArrowLeft
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="text-[35px] text-gray-600 font-light"
                />
              </>
            ) : (
              <>
                <MdArrowRight
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="text-[35px] text-gray-600 font-light"
                />
              </>
            )}
          </div>
        </div>
        <div className=" h-[100vh] w-  flex flex-col gap-10 items-start p-2">
          {toggle && (
            <>
              {items.map((el: any) => (
                <div
                  className="px-3 py-1 cursor-default rounded-md text-[13px] font-semibold text-white"
                  key={el.id}
                >
                  {el.name}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sider;
