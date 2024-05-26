"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const Navigation = (props: Props) => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between w-full py-8">
      <ul className="flex gap-2">
        <Link href="/the-journey">
          <li
            className={cn(
              {
                "bg-white rounded-md text-black": pathName === "/the-journey",
              },
              "p-1 rounded-md hover:bg-black hover:text-white text-[.8rem] md:text-[1rem]",
            )}
          >
            Home
          </li>
        </Link>
        <Link href="/the-journey/posts">
          <li
            className={cn(
              {
                "bg-white rounded-md text-black":
                  pathName === "/the-journey/posts" ||
                  pathName.includes("/posts"),
              },
              "p-1 rounded-md hover:bg-black hover:text-white text-[.8rem] md:text-[1rem]",
            )}
          >
            Posts
          </li>
        </Link>
        <Link href="/">
          <li
            className={cn(
              {
                "bg-white rounded-md text-black": pathName === "/",
              },
              "p-1 rounded-md hover:bg-black hover:text-white text-[.8rem] md:text-[1rem]",
            )}
          >
            Portfolio
          </li>
        </Link>
      </ul>

      <h1 className="text-[1rem] font-light tracking-wide font-spectral self-center md:text-[1.3rem]">
        The Journey
      </h1>
    </div>
  );
};

export default Navigation;
