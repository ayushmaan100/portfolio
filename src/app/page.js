import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import CodingProfile from "./components/CodingProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#0f0f0f] via-[#181818] to-[#111010]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection /> 
        <AboutSection />
        <CodingProfile/>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}