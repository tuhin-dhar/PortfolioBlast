import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Monitor, Server, Database } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Languages",
      icon: Code,
      skills: ["JavaScript (ES6+)", "TypeScript", "Go", "SQL", "Dart"],
      gradient: "from-bright-cyan/20 to-cyan-500/20"
    },
    {
      category: "Frontend",
      icon: Monitor,
      skills: ["React.js", "Next.js", "Flutter", "TailwindCSS", "Radix UI"],
      gradient: "from-cyan-500/20 to-bright-cyan/20"
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Hono", "tRPC"],
      gradient: "from-cyan-400/20 to-bright-cyan/20"
    },
    {
      category: "Database & Infrastructure",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker"],
      gradient: "from-bright-cyan/20 to-cyan-400/20"
    }
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto mb-4" />
          <p className="text-slate-gray text-lg">The tools I use to bring ideas to life</p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="group glass-effect rounded-2xl overflow-hidden transition-all duration-500 min-h-[280px] flex flex-col"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(34, 211, 238, 0.1)",
                  borderColor: "rgba(34, 211, 238, 0.3)"
                }}
              >
                {/* Header with icon and gradient */}
                <div className={`h-24 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="text-4xl text-bright-cyan" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-bright-cyan mb-6 text-center group-hover:text-cyan-300 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 flex-1 items-start">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-2 bg-bright-cyan/20 text-bright-cyan text-sm rounded-full border border-bright-cyan/30 cursor-pointer transition-all duration-300"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(34, 211, 238, 0.3)",
                          borderColor: "var(--bright-cyan)",
                          boxShadow: "0 10px 25px rgba(34, 211, 238, 0.2)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
