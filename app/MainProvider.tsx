"use client";

import React, { FC, ReactNode, createContext, useState } from "react";
import Sider from "./Sider";

interface iContext {
  children: ReactNode;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextProvider = createContext({});

export const MainProvider: FC<any> = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <ContextProvider.Provider value={[toggle, setToggle]}>
      <div className="flex justify-between">
        <div></div>
        <div className={toggle ? "w-[100%] md:w-[89%]" : "w-[100%]"}>
          {children}
        </div>
      </div>
    </ContextProvider.Provider>
  );
};
