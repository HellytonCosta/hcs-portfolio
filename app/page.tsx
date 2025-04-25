import AboutMe from "@/components/home/AboutMe";
import MainCard from "@/components/home/MainCard";
import MySkills from "@/components/home/MySkills";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div>
      <MainCard />
      <AboutMe />
      <MySkills />
      <Projects />
    </div>
  );
}
