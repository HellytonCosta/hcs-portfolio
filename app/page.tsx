import AboutMe from "@/components/home/AboutMe";
import MainCard from "@/components/home/MainCard";
import MySkills from "@/components/home/MySkills";
import Projects from "@/components/home/Projects";


export default function Home() {
  return (
    <div className="">
      <main className=" bg-[#f7f7f7] text-black gap-8 row-start-2 items-center sm:items-start">
        <MainCard />
        <AboutMe />
        <MySkills />
        <Projects />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
