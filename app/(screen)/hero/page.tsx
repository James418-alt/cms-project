import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const url = "https://cms-project-seven.vercel.app/api/hero";
  const read = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await read.json();
  const tru = data?.data?.length;
  // console.log(data);

  const updateformAction = async (FormData: FormData) => {
    "use server";
    const title = FormData.get("title");
    const desc = FormData.get("desc");
    const btnText = FormData.get("btnText");
    const linkText = FormData.get("linkText");
    const heroID = FormData.get("heroID");
    const Url = `https://cms-project-seven.vercel.app/api/hero/${heroID}`;
    await fetch(Url, {
      method: "PATCH",
      body: JSON.stringify({ title, desc, btnText, linkText }),
    }).then(() => redirect("/hero"));
  };

  const formAction = async (FormData: FormData) => {
    "use server";
    const title = FormData.get("title");
    const desc = FormData.get("desc");
    const btnText = FormData.get("btnText");
    const linkText = FormData.get("linkText");

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ title, desc, btnText, linkText }),
    }).then(() => redirect("/hero"));
  };
  return (
    <div>
      <div className="flex justify-start pt-10 md:pt-0 md:justify-center items-center flex-col gap-3 h-[100vh]">
        <h1 className="font-semibold text-[15px]">Customize Your Hero Page</h1>
        <form
          action={tru === 0 ? formAction : updateformAction}
          className="w-[280px]  md:w-[400px] flex flex-col gap-3 border p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Hero Title</label>
            <input
              required
              defaultValue={data?.data[0]?.title}
              className="outline-none border p-2 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px] text-[12px]"
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
              required
              defaultValue={data?.data[0]?.desc}
              className="outline-none border p-2 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px] text-[12px]"
              type="text"
              placeholder="Enter your herror Description here"
              name="desc"
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Button Text</label>
            <input
              required
              defaultValue={data?.data[0]?.btnText}
              className="outline-none border p-2 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px] text-[12px]"
              type="text"
              placeholder="Enter your Button text here"
              name="btnText"
            />
          </div>
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Link Text</label>
            <input
              required
              defaultValue={data?.data[0]?.linkText}
              className="outline-none border p-2 rounded-sm active:border-pink-700 active:shadow-sm placeholder:text-[12px] text-[12px]"
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
              {tru === 0 ? "Create Hero" : "Update Hero"}
            </button>
          </div>
          <input name="heroID" type="hidden" value={data?.data[0]?._id} />
        </form>
      </div>
    </div>
  );
};

export default page;
