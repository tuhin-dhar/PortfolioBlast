import { motion } from "framer-motion";
import profileImage from "@assets/ChatGPT Image Aug 1, 2025, 09_17_29 AM_1754020496709.png";

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-playfair font-bold leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  className="block gradient-text animate-gradient"
                  style={{ backgroundSize: "200% 200%" }}
                  whileHover={{ scale: 1.05 }}
                >
                  I Build.
                </motion.span>
                <motion.span 
                  className="block gradient-text animate-gradient"
                  style={{ backgroundSize: "200% 200%" }}
                  whileHover={{ scale: 1.05 }}
                >
                  I Ship.
                </motion.span>
                <motion.span 
                  className="block gradient-text animate-gradient"
                  style={{ backgroundSize: "200% 200%" }}
                  whileHover={{ scale: 1.05 }}
                >
                  I Don't Miss.
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-slate-gray font-medium"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tech Lead & Full Stack Developer crafting scalable solutions
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => handleNavClick("#projects")}
                className="px-8 py-4 bg-gradient-to-r from-bright-cyan to-cyan-500 text-rich-dark font-semibold rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="px-8 py-4 border border-bright-cyan text-bright-cyan font-semibold rounded-lg transition-all duration-300 hover:bg-bright-cyan hover:text-rich-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/attached_assets/Tuhin_Dhar_Resume_June_2025_1754021633685.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-bright-cyan text-bright-cyan font-semibold rounded-lg transition-all duration-300 hover:bg-bright-cyan hover:text-rich-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-bright-cyan/20 shadow-2xl shadow-bright-cyan/20 transition-all duration-500"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(34, 211, 238, 0.4)"
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Tuhin Dhar Profile" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-bright-cyan to-cyan-500 rounded-full opacity-20 blur-xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
