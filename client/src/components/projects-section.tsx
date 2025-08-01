import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ExternalLink, Code, Calendar, Video, Hotel } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      name: "Loopdesk",
      description: "Team & Project Management Website with multi-workspace task tracking and analytics",
      link: "https://loopdesk-zeta.vercel.app/",
      icon: Calendar,
      features: [
        "Kanban, Table, and Calendar views",
        "Role-based team access",
        "Advanced analytics and reporting"
      ],
      techStack: ["Next.js", "TypeScript", "Appwrite"],
      gradient: "from-bright-cyan/20 to-cyan-500/20"
    },
    {
      name: "Grem",
      description: "Real-time video calling web app with interactive UI and secure authentication",
      icon: Video,
      features: [
        "Real-time video calls with Stream SDK",
        "Interactive dialogs and toasts",
        "Secure authentication using Clerk"
      ],
      techStack: ["Next.js 14", "Stream SDK", "Radix UI"],
      gradient: "from-cyan-500/20 to-bright-cyan/20"
    },
    {
      name: "Opal Oases",
      description: "Hotel booking platform with real-time availability, payments, and reviews",
      icon: Hotel,
      features: [
        "Secure payments with Stripe",
        "JWT-based authentication",
        "Cloudinary for image uploads"
      ],
      techStack: ["React", "Node.js", "MongoDB"],
      gradient: "from-cyan-400/20 to-bright-cyan/20"
    }
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/30 to-rich-dark" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto mb-4" />
          <p className="text-slate-gray text-lg">Showcasing innovation through code</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group glass-effect rounded-2xl overflow-hidden transition-all duration-500"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(34, 211, 238, 0.2)",
                borderColor: "rgba(34, 211, 238, 0.3)"
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <project.icon className="text-6xl text-bright-cyan" />
                </motion.div>
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-bright-cyan mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.name}
                </motion.h3>
                <p className="text-slate-gray mb-4 group-hover:text-cool-gray transition-colors duration-300">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-slate-gray"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 + featureIndex * 0.1 }}
                    >
                      <CheckCircle className="text-bright-cyan w-4 h-4" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-bright-cyan/20 text-bright-cyan text-xs rounded-full"
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-bright-cyan hover:text-cyan-300 font-semibold transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <div className="text-slate-gray font-semibold">
                    <Code className="inline w-4 h-4 mr-2" />
                    <span>Private Repository</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
