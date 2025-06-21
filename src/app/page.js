import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container ">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <HeroSection />
      </main>
        
  );
}
