"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  const pathName = usePathname();
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
      <div>
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
    </nav>
  );
};

export default Navigation;
