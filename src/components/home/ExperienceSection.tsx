import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Cloud,
} from "lucide-react";
import SectionHeader from "../UI/SectionHeader";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Audit Partnership",
      period: "May 2025 - Oct 2025",
      role: "Senior Software Engineer",
      description:
        "Developed and maintained secure, scalable web applications using .NET, focusing on high-performance features for internal auditors and international clients.",
      highlights: [
        "Designed and integrated RESTful APIs, optimizing complex data handling with Entity Framework Core and SQL.",
        "Contributed to the core system architecture, focusing on improved scalability and long-term maintainability.",
        "Enhanced overall system performance through strategic database indexing and optimized workflow-driven feature delivery.",
        "Proactively identified and resolved critical bugs to ensure seamless auditing workflows and client data integrity.",
      ],
      skills: [".NET", "EF Core", "SQL", "System Architecture", "REST APIs"],
      icon: <ShieldCheck className="text-blue-400" size={20} />,
    },
    {
      company: "Cedar Gate Technologies",
      period: "April 2018 - May 2025",
      role: "Senior Software Engineer",
      description:
        "Architected and delivered enterprise-grade healthcare and financial web solutions using a diverse tech stack including ASP.NET Core, Blazor, and Grails.",
      highlights: [
        "Designed and developed custom RESTful APIs to facilitate seamless data exchange across distributed systems.",
        "Utilized SQL and EF Core for high-efficiency data modeling and deep performance optimization of database interactions.",
        "Implemented robust cloud solutions using AWS services (S3, SQS, Kinesis, EventBridge) to ensure fault tolerance and global scalability.",
        "Ensured zero-regression deployments through comprehensive unit testing using xUnit and NUnit frameworks.",
        "Led version control strategies using Git, managing complex branching and conflict resolution for large-scale team collaboration.",
        "Orchestrated project workflows in JIRA, leading sprint planning and cross-functional coordination to meet strict delivery milestones.",
        "Collaborated directly with stakeholders to translate business requirements into actionable, high-performance technical solutions.",
        "Provided technical leadership and mentorship to junior engineers, establishing best practices for code quality and software design.",
      ],
      skills: [
        "ASP.NET Core",
        "AWS",
        "Blazor",
        "Grails",
        "JIRA",
        "xUnit",
        "Kinesis",
      ],
      icon: <Cloud className="text-indigo-400" size={20} />,
    },
  ];

  return (
    <section className="min-h-screen w-full py-20 px-8 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="">
        <SectionHeader
          icon={Briefcase}
          label="Professional History"
          title="The"
          highlightedWord="Journey."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-5.25 top-0 h-10 w-10 bg-black border border-white/20 rounded-xl flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,1)]">
                {exp.icon}
              </div>

              <div className="group relative">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-blue-500 font-mono text-sm tracking-wider uppercase mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-bold font-mono">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-4xl italic">
                  "{exp.description}"
                </p>

                {/* Expanded Bullet Points */}
                <div className="grid grid-cols-1 gap-4 mb-10">
                  {exp.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-5 bg-white/2 border border-white/5 rounded-2xl hover:bg-white/4 transition-all"
                    >
                      <ChevronRight
                        size={18}
                        className="text-blue-600 mt-1 shrink-0"
                      />
                      <span className="text-gray-300 text-[15px] leading-relaxed font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-md text-[10px] font-bold text-blue-400 uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Section Connector line shadow */}
                <div className="absolute -bottom-12 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
