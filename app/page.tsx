import MainCard from "@/components/home/MainCard";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col bg-[#f7f7f7] text-black h-screen gap-8 row-start-2 items-center sm:items-start">
        <MainCard />
        <h2 className="my-5 mx-auto text-center text-3xl">Stacks I work with:</h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
