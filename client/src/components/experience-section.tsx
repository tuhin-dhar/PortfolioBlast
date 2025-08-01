import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Smartphone, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Tech Lead (Founding Team)",
      company: "Eastri",
      duration: "Apr 2025 – Present",
      responsibilities: [
        { icon: Code, text: "Built and maintained backend using Node.js, PostgreSQL, Redis, WebSockets, RabbitMQ" },
        { icon: Users, text: "Led a 30-member cross-functional team across frontend, backend, Flutter, and design" },
        { icon: Smartphone, text: "Developed Eastri consumer & partner apps in Flutter and contributed to React-based web modules" },
        { icon: MapPin, text: "Defined backend roadmap, enforced best practices, and ensured high delivery velocity" },
      ],
    },
    {
      title: "Frontend Engineer Intern",
      company: "Odisoft Technologies",
      duration: "Apr 2025 – May 2025",
      description: "Developed Importkey SaaS frontend using React, TypeScript, Tailwind CSS, and Vite",
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Astraeus Next Gen",
      duration: "Feb 2025 – Apr 2025",
      description: "Built responsive React interfaces and data visualization dashboards using Recharts",
    },
  ];

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto mb-4" />
          <p className="text-slate-gray text-lg">My professional journey in tech</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Eastri Experience */}
          <motion.div
            className="group glass-effect rounded-2xl p-8 transition-all duration-500"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(34, 211, 238, 0.1)",
              borderColor: "rgba(34, 211, 238, 0.3)"
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-bright-cyan mb-2">
                  {experiences[0].title}
                </h3>
                <p className="text-xl text-cool-gray font-semibold">
                  {experiences[0].company}
                </p>
              </div>
              <div className="text-slate-gray font-medium mt-2 md:mt-0">
                {experiences[0].duration}
              </div>
            </div>
            
            <ul className="space-y-3">
              {experiences[0].responsibilities?.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-slate-gray group-hover:text-cool-gray transition-colors duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <item.icon className="text-bright-cyan mt-1 flex-shrink-0 w-5 h-5" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Experiences */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.slice(1).map((exp, index) => (
              <motion.div
                key={index}
                className="group glass-effect rounded-2xl p-6 transition-all duration-500"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.1)",
                  borderColor: "rgba(34, 211, 238, 0.3)"
                }}
              >
                <h3 className="text-xl font-bold text-bright-cyan mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-cool-gray font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-gray text-sm mb-4">
                  {exp.duration}
                </p>
                <p className="text-slate-gray group-hover:text-cool-gray transition-colors duration-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
