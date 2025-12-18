import Testimonials from "@/components/main/Testimonials";
import Hero from "@/components/main/Hero";
import HomeServices from "@/components/main/HomeServices";
import HowWeWork from "@/components/main/HowWeWork";
import Intro from "@/components/main/Intro";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-screen gap-20">
        <Hero />
      </div>
      <Intro />
      <HomeServices />
      <HowWeWork />
      {/* <Testimonials /> */}
    </main>
  );
}
