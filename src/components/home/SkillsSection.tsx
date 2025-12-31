import { motion } from "framer-motion";
import { Users, Workflow, Layers, MessageSquare, Terminal } from "lucide-react";
import SectionHeader from "../UI/SectionHeader";

const LOGOS = {
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  groovy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  sql: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  dotnet:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  blazor:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
  efcore:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg",
  grails:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grails/grails-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  aws: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  visualstudio:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  rider:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
};

const SkillBadge = ({ icon, name }: { icon: string; name: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
    className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/2 transition-all group"
  >
    <img
      src={icon}
      alt={name}
      className="w-10 h-10 mb-4 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all"
    />
    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center">
      {name}
    </span>
  </motion.div>
);

const StrategyCard = ({ title, description, icon, tags, logo }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative p-8 rounded-3xl border border-white/10 bg-linear-to-br from-white/3 to-transparent overflow-hidden hover:border-blue-500/30 transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-black/40 rounded-2xl border border-white/5 text-blue-400">
        {icon}
      </div>
      {logo && (
        <img
          src={logo}
          className="w-8 h-8 opacity-40 grayscale group-hover:grayscale-0 transition-all"
          alt="logo"
        />
      )}
    </div>
    <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span
          key={tag}
          className="px-3 py-1 bg-blue-500/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-blue-400/10"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="p-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          icon={Terminal}
          label="Expertise"
          title="Technical"
          highlightedWord="Stack."
        />

        {/* Languages & Frameworks */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {/* 1. The .NET Ecosystem (Your Core Strength) */}
          <SkillBadge icon={LOGOS.csharp} name="C#" />
          <SkillBadge icon={LOGOS.dotnet} name=".NET Core" />
          <SkillBadge icon={LOGOS.efcore} name="EF Core" />
          <SkillBadge icon={LOGOS.blazor} name="Blazor" />

          {/* 2. Database & Data Layer (Sits between BE and FE) */}
          <SkillBadge icon={LOGOS.sql} name="SQL" />

          {/* 3. The JVM Ecosystem (Secondary Backend) */}
          <SkillBadge icon={LOGOS.java} name="Java" />
          <SkillBadge icon={LOGOS.groovy} name="Groovy" />
          <SkillBadge icon={LOGOS.grails} name="Grails" />

          {/* 4. Frontend & Scripting (Client Side) */}
          <SkillBadge icon={LOGOS.javascript} name="JS" />
          <SkillBadge icon={LOGOS.react} name="React" />
          <SkillBadge icon={LOGOS.angular} name="AngularJS" />
          <SkillBadge icon={LOGOS.python} name="Python" />
        </div>

        {/* Development Environment */}
        <div className="mb-20">
          <h4 className="text-gray-500 font-mono mb-8 uppercase tracking-widest text-xs">
            IDEs & Cloud
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <SkillBadge icon={LOGOS.visualstudio} name="Visual Studio" />
            <SkillBadge icon={LOGOS.vscode} name="VS Code" />
            <SkillBadge icon={LOGOS.rider} name="Rider" />
            <SkillBadge icon={LOGOS.aws} name="AWS" />
            <SkillBadge icon={LOGOS.azure} name="Azure" />
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
          <StrategyCard
            title="Agile Project Management"
            description="Managing complex Agile lifecycles using JIRA and leading Sprint Planning sessions."
            icon={<Workflow size={32} />}
            tags={["JIRA", "Sprint Planning"]}
            logo={LOGOS.jira}
          />
          <StrategyCard
            title="Technical Solution Design"
            description="Designing scalable architectures and solving complex system-level challenges."
            icon={<Layers size={32} />}
            tags={["Architecture", "Design Patterns"]}
          />
          <StrategyCard
            title="Team Leadership"
            description="Leading engineering teams and mentoring developers to drive high-quality delivery."
            icon={<Users size={32} />}
            tags={["Mentorship", "Leadership"]}
          />
          <StrategyCard
            title="Stakeholder Strategy"
            description="Requirement gathering and collaborating across cross-functional teams."
            icon={<MessageSquare size={32} />}
            tags={["Communication", "Requirements"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
