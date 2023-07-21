import Image from "next/image";
import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <Menu />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
