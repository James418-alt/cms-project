import React from "react";

const page = async () => {
  const url = "http://localhost:3000/api/header";
  const res = await fetch(url, { method: "GET", cache: "no-cache" });
  const dd = await res.json();
  const thru = dd.data.length;
  //   console.log(thru);

  const formAction = async (formData: FormData) => {
    "use server";
    const logo = formData.get("logo");
    const navItmes = formData.get("navs");
    const btnText = formData.get("btnText");
    const btnColor = formData.get("btnColor");
    const navs = navItmes?.toString().split(",");

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ logo, navs, btnText, btnColor }),
    }).then(() => {
      console.log("Done");
    });
  };

  const updateFormAction = async (formData: FormData) => {
    "use server";
    const logo = formData.get("logo");
    const navItmes = formData.get("navs");
    const btnText = formData.get("btnText");
    const btnColor = formData.get("btnColor");
    const navs = navItmes?.toString().split(",");
    const headerID = formData.get("headerID");
    console.log(headerID);

    const Url = `http://localhost:3000/api/header/${headerID}`;

    await fetch(Url, {
      method: "PATCH",
      body: JSON.stringify({ logo, navs, btnText, btnColor }),
    }).then(() => {
      console.log("Done");
    });
  };
  return (
    <div className="flex flex-col pt-8 gap-3 md:justify-center md:pt-0 items-center h-[100vh]">
      <h1 className="font-semibold text-[15px]">Customize Header</h1>
      <form
        action={thru === 0 ? formAction : updateFormAction}
        className="w-[280px]  md:w-[400px] flex flex-col gap-3 border p-2 rounded-md"
      >
        <div className="flex flex-col gap-2 p-1">
          <label className="font-semibold text-[12px]">Logo</label>
          <div className="border grid md:grid-cols-7 items-center pb-1">
            <input
              required
              className="col-span-1 md:col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
              type="text"
              placeholder="Input Logo"
              name="logo"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 p-1">
          <label className="font-semibold text-[12px]">
            Navs{" "}
            <span className="text-[10px] font-medium text-gray-500">
              NOTE:(Seperate each nav with a coma)
            </span>
          </label>
          <div className="border grid w-full md:grid-cols-3 pb-1 items-center">
            <input
              required
              className="col-span-2  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
              type="text"
              placeholder="Input Nav Items"
              name="navs"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-1">
          <label className="font-semibold text-[12px]">Button Text</label>
          <div className="border flex justify-between items-center">
            <input
              required
              className="col-span-4  outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
              type="text"
              placeholder="Button text"
              name="btnText"
            />
            <div className="col-span-3 gap-5 pr-3 pl-1">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 items-center">
                  <span className="font-light text-[10px]">Color:</span>
                  <input
                    className="w-[20px] h-[20px]"
                    name="btnColor"
                    type="color"
                  />
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
            {thru === 0 ? "Create Header" : "Update Header"}
          </button>
        </div>
        <input name="headerID" type="hidden" value={dd.data[0]._id} />
      </form>
    </div>
  );
};

export default page;
