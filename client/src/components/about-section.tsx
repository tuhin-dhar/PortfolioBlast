import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rich-dark to-deep-navy/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl shadow-dark-slate/20 transition-all duration-500"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(34, 211, 238, 0.1)"
            }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-center mb-8">
              As a <span className="text-bright-cyan font-semibold">Tech Lead</span> on the founding team at Eastri, I've led a 30-member cross-functional team and built scalable backend systems using Node.js, PostgreSQL, Redis, and WebSockets. My passion lies in creating robust, user-centric applications that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-center text-slate-gray">
              From developing Flutter apps to architecting backend solutions, I bring a full-stack perspective to every project. I believe in writing clean, maintainable code and fostering collaborative environments where great ideas flourish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
