import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const formAction = async (formData: FormData) => {
    "use server";
    const logo = formData.get("logo");
    const rnavs = formData.get("navs");
    const btnText = formData.get("btnText");
    const navs = rnavs?.toString().split(",");

    const url = "http://localhost:3001/api/header";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ logo, navs, btnText }),
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center h-[100vh] ">
        <h1 className="font-semibold text-[15px] mb-3">
          Customize Your Hero Page
        </h1>
        <form
          action={formAction}
          className="w-[280px]  md:w-[400px] flex flex-col gap-3 border p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Logo</label>
            <div className="border grid md:grid-cols-7 items-center pb-1">
              <input
                required
                className="col-span-1 md:col-span-4 bg-none outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
                name="logo"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 p-1">
            <label className="font-semibold text-[12px]">
              Navigation (Seperate all navigations with a coma)
            </label>
            <div className="border grid md:grid-cols-7 pb-1 items-center">
              <input
                required
                className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
                name="navs"
              />
              <div className="col-span-3 gap-5 pr-3 pl-1">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Color:</span>
                    <input
                      className="w-[20px] h-[20px]"
                      name="desccolor"
                      type="color"
                    />
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Font:</span>
                    <select
                      className="font-semibold text-[10px] outline-none border"
                      name="descsize"
                    >
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Button Text</label>
            <div className="border grid md:grid-cols-7 pb-1 items-center">
              <input
                required
                placeholder="Enter your buton text"
                className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                name="btnText"
              />
              <div className="col-span-3 gap-5 pr-3 pl-1">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Color:</span>
                    <input
                      className="w-[20px] h-[20px]"
                      name="btncolor"
                      type="color"
                    />
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Font:</span>
                    <select
                      className="font-semibold text-[10px] outline-none border"
                      name="btnsize"
                    >
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-3  py-1 rounded-md text-white font-semibold text-[12px] bg-pink-800"
            >
              Create Header
            </button>
          </div>
          <input name="heroID" type="hidden" />
        </form>
      </div>
    </div>
  );
};

export default page;
