import { HeroSection } from "@/components/sections/hero-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
