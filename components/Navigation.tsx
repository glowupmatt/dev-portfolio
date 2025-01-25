"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

const Navigation = (props: Props) => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  function onMenuClick() {
    setShowMenu(true);
  }

  const onCloseMenu = () => {
    setShowMenu(false);
  };
  const currentPath = pathName.split("/")[1];
  const navigationOptions = [
    {
      path: "",
      text: "Portfolio",
      id: "portfolio",
    },
    {
      path: "project-breakdowns",
      text: "Project Breakdowns",
      id: "project-breakdowns",
    },
    {
      path: "the-journey",
      text: "Blog",
      id: "the-journey",
    },
  ];
  return (
    <nav className="fixed z-[100] bg-black/90 text-white flex justify-between p-4 w-full items-center">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="website logo"
          width={50}
          height={50}
          className="rounded-full h-8 w-8"
        />
      </Link>
      <div className="md:hidden" onClick={onMenuClick}>
        <FaBars size={24} />
      </div>

      <div
        className={classNames("hidden md:flex", {
          "flex flex-col justify-center items-center": showMenu,
        })}
      >
        <ul className="flex justify-center space-x-4">
          {navigationOptions.map((option) => (
            <li
              key={option.text}
              className={classNames(
                "",
                {
                  "font-bold text-purple-500": currentPath === option.path,
                },
                {
                  "font-200 text-white": currentPath !== option.path,
                },
              )}
            >
              <Link href={`/${option.path}`}>{option.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={classNames(
          "fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center transition-transform transform",
          {
            "translate-x-0": showMenu,
            "-translate-x-full": !showMenu,
          },
        )}
      >
        <div className="absolute top-4 right-4" onClick={onCloseMenu}>
          <FaTimes size={24} />
        </div>
        <ul className="space-y-4">
          {navigationOptions.map((option) => (
            <li
              key={option.text}
              className={classNames(
                "text-white text-2xl",
                {
                  "font-bold text-purple-500": currentPath === option.path,
                },
                {
                  "font-200 text-white": currentPath !== option.path,
                },
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
