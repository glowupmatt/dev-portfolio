import Image from "next/image";
import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="flex flex-col gap-[4rem] md:gap-[6rem]">
      <Menu />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
