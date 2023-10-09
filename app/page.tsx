"use client";

import Image from "next/image";
import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ContactInfo from "@/components/ContactInfo";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5]">
      <div className="flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-2 max-w-[140rem]">
        <Menu />
        <TechStack />
        <Projects />
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <ContactInfo />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}
