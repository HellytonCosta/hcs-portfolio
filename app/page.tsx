import AboutMe from "@/components/home/AboutMe";
import MainCard from "@/components/home/MainCard";
import MySkills from "@/components/home/MySkills";


export default function Home() {
  return (
    <div className="">
      <main className=" bg-[#f7f7f7] text-black h-screen gap-8 row-start-2 items-center sm:items-start">
        <MainCard />
        <AboutMe />
        <MySkills />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
