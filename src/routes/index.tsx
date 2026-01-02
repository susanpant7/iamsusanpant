import { createFileRoute } from "@tanstack/react-router";
import IntroSection from "../components/home/IntroSection";
import SkillsSection from "../components/home/SkillsSection";
import ExperienceSection from "../components/home/ExperienceSection";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      {/* Each section integrated separately */}
      <div id="home">
        <IntroSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>
    </main>
  );
}

export default Home;
