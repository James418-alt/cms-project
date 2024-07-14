import React from "react";
import { MdImage } from "react-icons/md";

const page = () => {
  const formAct = async (formData: FormData) => {
    "use server";
    const text = formData.get("text") as File;
    const file = new FileReader();
    file.readAsDataURL(text);
  };
  return (
    <div>
      <div className="flex justify-center items-center md:h-[100vh]">
        <h1 className="font-semibold text-[15px]">Section1 Coming Soon!!</h1>
      </div>
    </div>
  );
};

export default page;
