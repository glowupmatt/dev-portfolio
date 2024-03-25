"use client";
import React, { useContext } from "react";
import { NavState } from "@/app/appContext/NavContext";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  const { selectedId, setSelectedId } = useContext(NavState);
  const navigationOptions = [
    {
      path: "",
      text: "Portfolio",
      id: "portfolio",
    },
    {
      path: "blog",
      text: "Blog",
      id: "blog",
    },
  ];
  return (
    <nav className="fixed z-[100] bg-black/40 text-white flex justify-between p-4 w-full items-center">
      <Link href={"/"} onClick={() => setSelectedId("portfolio")}>
        <Image
          src="/logo.png"
          alt="website logo"
          width={50}
          height={50}
          className="rounded-full h-8 w-8"
        />
      </Link>
      <div>
        <ul className="flex justify-center space-x-4">
          {navigationOptions.map((option) => (
            <li
              onClick={() => setSelectedId(option.id)}
              key={option.text}
              className={classNames(
                "",
                {
                  "font-bold text-purple-500": selectedId === option.id,
                },
                {
                  "font-200 text-white": selectedId !== option.id,
                }
              )}
            >
              <Link href={`/${option.path}`}>{option.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
