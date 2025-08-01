import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "work.tuhindhar@gmail.com",
      href: "mailto:work.tuhindhar@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@tuhin000",
      href: "https://www.linkedin.com/in/tuhin000"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@tuhin-dhar",
      href: "https://github.com/tuhin-dhar"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7002282099",
      href: "tel:+917002282099"
    }
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bright-cyan to-cyan-500 mx-auto mb-4" />
          <p className="text-slate-gray text-lg">Ready to build something amazing together?</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass-effect rounded-2xl p-6 text-center transition-all duration-500 block"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
                  borderColor: "rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <contact.icon className="text-4xl text-bright-cyan mb-4 mx-auto" />
                </motion.div>
                <h3 className="font-bold text-cool-gray mb-2">
                  {contact.title}
                </h3>
                <p className="text-slate-gray text-sm">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
