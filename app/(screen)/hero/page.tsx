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
    const headercolor = FormData.get("headercolor");
    const desccolor = FormData.get("desccolor");
    const btncolor = FormData.get("btncolor");
    const linkcolor = FormData.get("linkcolor");
    const headersize = FormData.get("headersize");
    const descsize = FormData.get("descsize");
    const btnsize = FormData.get("btnsize");
    const linksize = FormData.get("linksize");
    const heroID = FormData.get("heroID");
    // console.log(desccolor);
    const Url = `https://cms-project-seven.vercel.app/api/hero/${heroID}`;
    // const Url = `http://localhost:3001/api/hero/${heroID}`;

    await fetch(Url, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        desc,
        btnText,
        linkText,
        headercolor,
        desccolor,
        btncolor,
        linkcolor,
        headersize,
        descsize,
        btnsize,
        linksize,
      }),
    });
  };

  const formAction = async (FormData: FormData) => {
    "use server";
    const title = FormData.get("title");
    const desc = FormData.get("desc");
    const btnText = FormData.get("btnText");
    const linkText = FormData.get("linkText");
    const headercolor = FormData.get("headercolor");
    const desccolor = FormData.get("desccolor");
    const btncolor = FormData.get("btncolor");
    const linkcolor = FormData.get("linkcolor");
    const headersize = FormData.get("headersize");
    const descsize = FormData.get("descsize");
    const btnsize = FormData.get("btnsize");
    const linksize = FormData.get("linksize");

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        btnText,
        linkText,
        headercolor,
        desccolor,
        btncolor,
        linkcolor,
        headersize,
        descsize,
        btnsize,
        linksize,
      }),
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
            <div className="border grid md:grid-cols-7 items-center pb-1">
              <input
                required
                defaultValue={data?.data[0]?.title}
                className="col-span-1 md:col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
                name="title"
              />
              <div className="col-span-1 md:col-span-3 gap-5 pr-3 pl-1">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 justify-center items-center">
                    <span className="font-light text-[10px]">Color:</span>
                    <input
                      className="w-[20px] h-[20px]"
                      name="headercolor"
                      type="color"
                    />
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Font:</span>
                    <select
                      className="font-semibold text-[10px] outline-none border"
                      name="headersize"
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

          <div className="flex flex-col gap-1 p-1">
            <label className="font-semibold text-[12px]">
              Hero Description
            </label>
            <div className="border grid md:grid-cols-7 pb-1 items-center">
              <input
                required
                defaultValue={data?.data[0]?.title}
                className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
                name="desc"
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
                defaultValue={data?.data[0]?.title}
                className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
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

          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[12px]">Link Text</label>
            <div className="border grid md:grid-cols-7 pb-1 items-center">
              <input
                required
                defaultValue={data?.data[0]?.title}
                className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your herror title here"
                name="linkText"
              />
              <div className="col-span-3 gap-5 pr-3 pl-1">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Color:</span>
                    <input
                      className="w-[20px] h-[20px]"
                      name="linkcolor"
                      type="color"
                    />
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Font:</span>
                    <select
                      className="font-semibold text-[10px] outline-none border"
                      name="linksize"
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
