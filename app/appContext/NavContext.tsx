"use client";
import React from "react";
import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type NavContextType = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};
export const NavState = createContext({} as NavContextType);
const NavContext = (props: Props) => {
  const { children } = props;
  const [selectedId, setSelectedId] = useState<string>("portfolio");
  return (
    <NavState.Provider value={{ selectedId, setSelectedId } as NavContextType}>
      {children}
    </NavState.Provider>
  );
};

export default NavContext;
