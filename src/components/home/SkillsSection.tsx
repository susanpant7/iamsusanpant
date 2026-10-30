import {
  Users,
  Workflow,
  Layers,
  MessageSquare,
  Terminal,
  Sparkles,
  DatabaseZap,
} from "lucide-react";
import SectionHeader from "../UI/SectionHeader";
import { LOGOS } from "../../lib/Logos";

const SkillBadge = ({ icon, name }: { icon: string; name: string }) => (
  <div className="sk-panel sk-lift flex flex-col items-center justify-center p-6 group">
    <img
      src={icon}
      alt={name}
      loading="lazy"
      className="w-10 h-10 mb-4 object-contain"
    />
    <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.08em] text-center">
      {name}
    </span>
  </div>
);

const StrategyCard = ({ title, description, icon, tags, logo }: any) => (
  <div className="sk-panel sk-stitch sk-lift group relative p-8">
    <div className="flex justify-between items-start mb-6">
      <div className="sk-inset p-3 text-blue-400">
        {icon}
      </div>
      {logo && (
        <img
          src={logo}
          loading="lazy"
          className="w-8 h-8 opacity-60"
          alt="logo"
        />
      )}
    </div>
    <h4 className="text-xl font-serif font-bold sk-emboss mb-3">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span
          key={tag}
          className="sk-inset !rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-blue-400"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
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
          <h4 className="text-gray-400 !font-sans !font-bold mb-6 uppercase tracking-[0.1em] text-sm">
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
          <StrategyCard
            title="Fine-Tuning AI Models"
            description="Fine-tuning language models on domain data and shipping them inside real-world applications."
            icon={<Sparkles size={32} />}
            tags={["Fine-Tuning", "LLMs"]}
          />
          <StrategyCard
            title="RAG Applications"
            description="Building retrieval-augmented generation systems that ground AI answers in your own data."
            icon={<DatabaseZap size={32} />}
            tags={["RAG", "Embeddings", "Vector Search"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
