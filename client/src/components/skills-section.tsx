import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Go", "SQL", "Dart"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Flutter", "TailwindCSS", "Radix UI"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Hono", "tRPC"]
    },
    {
      category: "Database & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker"]
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
        
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-bright-cyan mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 glass-effect rounded-lg border border-dark-slate cursor-pointer transition-all duration-300"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{
                      scale: 1.05,
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
