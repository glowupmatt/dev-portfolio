import Menu from "@/components/Menu";
import TechStack from "@/components/portfolioComponents/techStackComponents/TechStack";
import Projects from "@/components/portfolioComponents/projectsComponents/Projects";
import ContactPage from "@/components/portfolioComponents/contactFormComponents/ContactPage";
import Navigation from "@/components/Navigation";
import { RenderBuilderContent } from "@/components/builderFiles/RenderBuilderContent";
import { builder } from "@builder.io/sdk";
import VideoDisplay from "@/components/portfolioComponents/videoWalkthroughComponents/VideoDisplay";

builder.init(process.env.NEXT_PUBLIC_API_KEY as string);

export default async function Home() {
  const content = await builder
    .getAll("project-data", { fields: "data" })
    .then((res) => res);
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-[#340d4ab5]">
        <div className="flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-2 max-w-[140rem]">
          <Menu />
          <TechStack />
          <VideoDisplay />
          <Projects content={content} />
          <ContactPage />
        </div>
      </div>
      <RenderBuilderContent model={"project-data"} content={content} />
    </>
  );
}
