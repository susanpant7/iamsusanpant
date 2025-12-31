// components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, Users, Rocket, Brain, 
  Code, Cpu, Award,
  GraduationCap, Globe, Zap, Sparkles
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strengths = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end development with .NET, ASP.NET Core, Blazor, React",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "System Architecture",
      description: "Designing scalable and maintainable software solutions",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Leadership",
      description: "Leading teams and mentoring junior developers",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Agile Delivery",
      description: "Managing sprints and ensuring project success",
      color: "from-orange-500 to-yellow-500",
      delay: 0.4
    }
  ];

  const expertise = [
    { name: ".NET & ASP.NET Core", level: 95 },
    { name: "AWS Cloud Services", level: 90 },
    { name: "React & Modern JS", level: 85 },
    { name: "Database Design", level: 88 },
    { name: "Team Leadership", level: 92 },
    { name: "Agile Methodology", level: 90 },
  ];

  return (
    <section ref={ref} id="about" className="py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full" />
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <div className="w-12 h-1 bg-linear-to-l from-purple-500 to-transparent rounded-full" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Senior Full-Stack Developer with 7+ years of experience building 
            enterprise-level applications and leading high-performing teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">My Philosophy</h3>
                    <p className="text-gray-400">Building with purpose & precision</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    I believe in creating software that not only solves problems but 
                    also delivers exceptional user experiences and business value. 
                    With a background in Electronics and Communication Engineering, 
                    I bring a unique, analytical approach to software development.
                  </p>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    My expertise spans across the entire development lifecycle - from 
                    conceptualization and architecture to implementation and deployment, 
                    always focusing on scalability, performance, and maintainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                Core Expertise
              </h3>
              
              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: "100%" } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Strengths Grid */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-400" />
                Key Strengths
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: strength.delay }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-linear-to-r from-gray-700 to-gray-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                    <div className="relative h-full bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <div className={`inline-flex p-4 rounded-xl bg-linear-to-r ${strength.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {strength.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {strength.title}
                      </h4>
                      <p className="text-gray-400">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Education</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white">
                      Bachelor's in Electronics & Communication Engineering
                    </h5>
                    <p className="text-gray-400 mt-1">WRC, IOE, Nepal</p>
                    <p className="text-gray-500 text-sm mt-2">2011 - 2015</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700/30">
                    <p className="text-gray-400">
                      Combined engineering principles with software development to create 
                      robust, efficient solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Languages</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { language: "Nepali", level: "Native", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
                    { language: "English", level: "Proficient", color: "bg-green-500/20 text-green-400 border-green-500/30" },
                    { language: "Hindi", level: "Proficient", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" }
                  ].map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-900/30">
                      <span className="text-gray-300 font-medium">{lang.language}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${lang.color}`}>
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Let's collaborate on your next project. I bring technical expertise, 
                leadership skills, and a passion for innovation to every engagement.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Target className="w-5 h-5" />
                Let's Connect
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;