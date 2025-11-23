import Hero from "@/components/main/Hero";
import HomeServices from "@/components/main/HomeServices";
import Intro from "@/components/main/Intro";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-screen gap-20">
        <Hero />
      </div>
      <Intro />
      <HomeServices />
    </main>
  );
}
