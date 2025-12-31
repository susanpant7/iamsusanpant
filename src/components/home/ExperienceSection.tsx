// components/ExperienceSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building, Award, CheckCircle, Code, Cpu, Cloud } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Audit Partnership",
      position: "Senior Software Engineer",
      period: "May 2025 - Oct 2025",
      icon: <Building className="w-6 h-6" />,
      achievements: [
        "Developed secure, scalable web applications using .NET",
        "Designed and integrated RESTful APIs",
        "Optimized data handling with Entity Framework Core and SQL",
        "Contributed to new system architecture for improved scalability"
      ],
      tech: [".NET", "Entity Framework", "SQL", "REST APIs"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Cedar Gate Technologies",
      position: "Senior Software Engineer",
      period: "April 2018 - May 2025",
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        "Designed and maintained web applications using ASP.NET Core & Blazor",
        "Created custom RESTful APIs and optimized database interactions",
        "Architected scalable software solutions aligned with business needs",
        "Implemented cloud solutions using AWS services (S3, SQS, Kinesis, EventBridge)",
        "Led teams and mentored developers for project success"
      ],
      tech: ["ASP.NET Core", "Blazor", "AWS", "React", "Grails", "xUnit"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={ref} id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            7+ years of building enterprise-level software solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full bg-linear-to-r ${exp.color} flex items-center justify-center`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Experience card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-lg text-gray-300">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-900/50 rounded-full">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-900/70 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Key Responsibilities & Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack Development",
                description: "End-to-end development of scalable web applications"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "System Architecture",
                description: "Designing maintainable and scalable software solutions"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Integration",
                description: "Implementing AWS services for fault-tolerant systems"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Team Leadership",
                description: "Mentoring developers and leading project teams"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;