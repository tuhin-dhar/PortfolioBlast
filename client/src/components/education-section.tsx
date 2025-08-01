import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "B.Tech in Computer Science and Technology",
      institution: "Sikkim Manipal Institute of Technology",
      location: "Majhitar, Sikkim",
      cgpa: "8.25",
      year: "2026 (Expected)",
      note: "Till 5th Sem"
    },
    {
      degree: "Higher Secondary Education",
      institution: "NPS International School",
      location: "Guwahati, Assam",
      scores: [
        { label: "Class XII", score: "91.8% (2021)" },
        { label: "Class X", score: "93.4% (2019)" }
      ]
    }
  ];

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rich-dark to-deep-navy/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group glass-effect rounded-2xl p-8 transition-all duration-500"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(34, 211, 238, 0.1)",
                borderColor: "rgba(34, 211, 238, 0.3)"
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="text-bright-cyan w-6 h-6" />
                    <h3 className="text-2xl font-bold text-bright-cyan">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-xl text-cool-gray mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-1 text-slate-gray">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  {edu.cgpa && (
                    <div className="text-bright-cyan font-bold text-lg">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                  {edu.year && (
                    <div className="text-slate-gray">
                      {edu.year}
                      {edu.note && ` (${edu.note})`}
                    </div>
                  )}
                  {edu.scores && (
                    <div className="space-y-1">
                      {edu.scores.map((score, scoreIndex) => (
                        <div key={scoreIndex} className="text-bright-cyan font-bold">
                          {score.label}: {score.score}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
