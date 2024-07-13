"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FaLeftRight } from "react-icons/fa6";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Sider = () => {
  const [toggle, setToggle] = useState(false);
  const items = [
    { id: 1, name: "Header", url: "/header" },
    { id: 2, name: "Hero", url: "/hero" },
    { id: 3, name: "Section1", url: "/section1" },
    { id: 4, name: "Section2", url: "/section2" },
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
                <Link
                  onClick={() => {
                    setToggle(false);
                  }}
                  href={el.url}
                  className="px-3 py-1 cursor-default rounded-md text-[13px] font-semibold text-white"
                  key={el.id}
                >
                  {el.name}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sider;
