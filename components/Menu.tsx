"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsButton from "./headerButtons/ProjectsButton";
import ContactButton from "./headerButtons/ContactButton";
import TechButton from "./headerButtons/TechButton";
import HeaderTitle from "./headerButtons/HeaderTitle";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden lg:justify-start lg:h-[70rem] p-4">
      <HeaderTitle />
      <section className="lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:gap-4 z-10">
        <ProjectsButton />
        <div className="flex w-full gap-[1rem] pt-4 lg:h-full lg:pt-0 lg:flex lg:flex-col">
          <TechButton />
          <ContactButton />
        </div>
      </section>
    </div>
  );
};

export default Menu;
