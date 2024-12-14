import BlurFade from "@/components/magicui/blur-fade";
import IconCloud from "@/components/ui/icon-cloud";
import { cn } from "@/lib/utils";
import { Skill, SkillSlug } from "@/types";

const CATEGORIES = [
  {
    title: "Programming Languages",
    description: "Core programming languages for software development",
    skills: ["javascript", "typescript", "c", "java"] as readonly SkillSlug[],
  },
  {
    title: "Frontend Development",
    description: "Core technologies for building modern web interfaces",
    skills: [
      "react",
      "nextdotjs",
      "html5",
      "css3",
      "tailwindcss",
      "framer",
      "radixui",
      "shadcnui",
    ] as readonly SkillSlug[],
  },
  {
    title: "State Management & Forms",
    description: "Tools for managing application state and form handling",
    skills: ["zustand", "reacthookform", "zod"] as readonly SkillSlug[],
  },
  {
    title: "Backend & Database",
    description: "Technologies for server-side and data management",
    skills: ["firebase", "i18next"] as readonly SkillSlug[],
  },
  {
    title: "Development Tools",
    description: "Essential tools for efficient development workflow",
    skills: [
      "git",
      "visualstudiocode",
      "vercel",
      "github",
      "githubcopilot",
    ] as readonly SkillSlug[],
  },
] as const;

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

function SkillCard({ skill, delay }: SkillCardProps) {
  return (
    <BlurFade delay={delay}>
      <div className="group flex flex-col items-center justify-between min-h-[160px] p-4 rounded-xl border border-border/50 bg-accent/50 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300">
        <div className="relative flex-1 flex items-center justify-center w-full mb-3">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300" />
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">{skill.icon}</div>
        </div>
        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
          {skill.name}
        </span>
      </div>
    </BlurFade>
  );
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: readonly Skill[];
  baseDelay: number;
}

function SkillCategory({
  title,
  description,
  skills,
  baseDelay,
}: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <BlurFade delay={baseDelay}>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </BlurFade>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            delay={baseDelay + index * 0.05}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillsSectionProps {
  skills: readonly Skill[];
  className?: string;
}

export function SkillsSection({ skills, className }: SkillsSectionProps) {
  const skillSlugs = skills
    .map((skill) => skill.iconSlug)
    .filter(Boolean) as string[];
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id="skills" className={cn("w-full", className)}>
      <div className="flex min-h-0 flex-col gap-16">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
              <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              My Tech Stack
            </h2>
            <p className="text-base text-muted-foreground/80 max-w-[600px]">
              Explore my technology stack and tools I use to build modern web
              applications
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="relative h-[450px] sm:h-[500px] w-full rounded-2xl border border-border/50 bg-accent/50 backdrop-blur-sm overflow-hidden">
            <IconCloud iconSlugs={skillSlugs} />
          </div>
        </BlurFade>

        <div className="space-y-16">
          {CATEGORIES.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              description={category.description}
              skills={skills.filter((skill) =>
                category.skills.includes(skill.iconSlug)
              )}
              baseDelay={BLUR_FADE_DELAY * (11 + index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
