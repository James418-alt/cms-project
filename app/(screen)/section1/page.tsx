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
      <div>
        <form action={formAct}>
          <label htmlFor="text">
            <MdImage />
          </label>
          <input id="text" name="text" type="file" hidden />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
