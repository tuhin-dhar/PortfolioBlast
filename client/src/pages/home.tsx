import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-rich-dark">
      <Navigation />
      <HeroSection />
      
      {/* Animated Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-bright-cyan to-transparent" />
      
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-dark-slate/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-gray">
              © 2025 Tuhin Dhar. Built with passion and lots of ☕
            </p>
            <div className="mt-4">
              <span className="gradient-text font-semibold">
                I Build. I Ship. I Don't Miss.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
