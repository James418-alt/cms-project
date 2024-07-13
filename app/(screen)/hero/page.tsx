import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-3 h-[100vh]">
        <h1 className="font-semibold text-[15px]">Customize Your Hero Page</h1>
        <form className="w-[280px]  md:w-[400px] flex flex-col gap-3 border p-2 rounded-md">
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Hero Title</label>
            <input
              className="outline-none border p-1 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px]"
              type="text"
              placeholder="Enter your herror title here"
              name="title"
            />
          </div>

          <div className="flex flex-col gap-1 p-1">
            <label className="font-semibold text-[12px]">
              Hero Description
            </label>
            <input
              className="outline-none border p-1 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px]"
              type="text"
              placeholder="Enter your herror Description here"
              name="desc"
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Button Text</label>
            <input
              className="outline-none border p-1 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px]"
              type="text"
              placeholder="Enter your Button text here"
              name="btnText"
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Link Text</label>
            <input
              className="outline-none border p-1 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px]"
              type="text"
              placeholder="Enter your Link Text here"
              name="linkText"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-3  py-1 rounded-md text-white font-semibold text-[12px] bg-pink-800"
            >
              Create Hero
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
