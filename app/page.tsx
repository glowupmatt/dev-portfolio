import Menu from "@/components/Menu";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ContactPage from "@/components/contactFormComponents/ContactPage";

export default function Home() {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5]">
      <div className="flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-2 max-w-[140rem]">
        <Menu />
        <TechStack />
        <Projects />
        <ContactPage />
      </div>
    </div>
  );
}
