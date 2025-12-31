import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-blue-500/30">
      <Header />

      {/* Each section integrated separately */}
      <div id="home">
        <HeroSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>
    </main>
  );
}

export default Home;
