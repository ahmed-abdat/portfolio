import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { WorkSection } from "@/components/work-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { DATA } from "@/data/resume";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 sm:space-y-12">
      <HeroSection className="max-w-5xl mx-auto px-4" />
      <AboutSection className="max-w-5xl mx-auto px-4" />
      <ProjectsSection className="max-w-5xl mx-auto px-4" />
      <SkillsSection className="max-w-5xl mx-auto px-4" skills={DATA.skills} />
      <WorkSection className="max-w-5xl mx-auto px-4" />
      <EducationSection className="max-w-5xl mx-auto px-4" />
      <AchievementsSection className="max-w-5xl mx-auto px-4" />
      <ContactSection className="max-w-5xl mx-auto px-4 pb-8 sm:pb-12" />
    </main>
  );
}
