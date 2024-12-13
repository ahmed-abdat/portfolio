import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import IconCloud from "@/components/ui/icon-cloud";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;
const skillSlugs = DATA.skills
  .map((skill) => skill.iconSlug)
  .filter(Boolean) as string[];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 sm:space-y-24">
      <section id="hero" className="w-full max-w-5xl mx-auto px-4 pt-12 sm:pt-24 pb-8 sm:pb-12">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-center sm:text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
              yOffset={8}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                {DATA.name.split(" ")[0]}
              </span>{" "}
              👋
            </BlurFadeText>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 blur-lg opacity-20" />
              <Avatar className="size-32 sm:size-40 border-2 border-cyan-500/20 relative">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="w-full max-w-5xl mx-auto px-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="space-y-6">
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  About
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-center sm:text-left">
                Full Stack Developer & Tech Entrepreneur
              </h2>
              <div className="prose prose-lg max-w-full text-pretty font-sans text-muted-foreground/90 dark:prose-invert space-y-4 leading-relaxed">
                <p>
                  Passionate Full Stack Developer with expertise in building
                  modern web applications. As the founder of a web & mobile
                  development agency, I&apos;ve successfully delivered diverse
                  projects from real-time messaging apps to comprehensive
                  management platforms.
                </p>
                <p>I specialize in:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 !mt-2 !list-none">
                  {[
                    { icon: "⚛️", text: "React.js & Next.js" },
                    { icon: "📱", text: "React Native & Expo" },
                    { icon: "🔷", text: "TypeScript" },
                    { icon: "🎨", text: "UI/UX Design" },
                    { icon: "🔄", text: "State Management" },
                    { icon: "⚡", text: "Performance Optimization" },
                  ].map((skill) => (
                    <li
                      key={skill.text}
                      className="flex items-center gap-2 text-base"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.text}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Currently expanding my expertise in React Native and exploring
                  advanced state management patterns to build more efficient and
                  scalable applications.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="work" className="w-full max-w-5xl mx-auto px-4">
        <div className="flex min-h-0 flex-col gap-4 sm:gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Work Experience
                </span>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="w-full max-w-5xl mx-auto px-4">
        <div className="flex min-h-0 flex-col gap-4 sm:gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Education
                </span>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="w-full max-w-5xl mx-auto px-4">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="rounded-xl border bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 p-[1px]">
            <div className="rounded-xl bg-background/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 blur-md opacity-25" />
                <div className="relative size-16">
                  <Image
                    src={DATA.hackathons[0].image || ""}
                    alt="AIESEC Hackathon"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    AIESEC Hackathon Achievement
                  </h3>
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-cyan-500/20">
                    <span className="text-xs font-medium bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                      2023
                    </span>
                  </div>
                </div>
                <p className="text-base text-muted-foreground/90">
                  Won 3rd place in the AIESEC hackathon for developing the
                  Eco-City platform, a solution for urban issue reporting and
                  environmental improvement.
                </p>
                {DATA.hackathons[0].links?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-fuchsia-500 transition-colors"
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills" className="w-full max-w-5xl mx-auto px-4">
        <div className="flex min-h-0 flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
              <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Skills
              </span>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="relative flex h-[500px] w-full items-center justify-center">
              <IconCloud iconSlugs={skillSlugs} />
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects" className="w-full max-w-5xl mx-auto px-4">
        <div className="space-y-8 sm:space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                  <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    My Projects
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Check out my latest work
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground/80 md:text-xl/relaxed max-w-[600px] mx-auto">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  technologies={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="download-resume" className="w-full max-w-5xl mx-auto px-4">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6 text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Resume
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Want to know{" "}
                  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    more?
                  </span>
                </h2>
                <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground/80 md:text-lg">
                  Download my resume to explore my professional journey, skills,
                  and achievements in detail.
                </p>
              </div>
            </div>

            <Link
              href={DATA.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-2xl mx-auto"
            >
              <div className="rounded-xl border bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 p-[1px] transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]">
                <div className="rounded-xl bg-background/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 animate-pulse blur-lg opacity-75" />
                      <div className="relative p-4 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500">
                        <Icons.download className="size-6 text-background" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start gap-1">
                      <div className="flex items-center gap-3">
                        <span className="text-lg sm:text-xl font-semibold bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                          Download My Resume
                        </span>
                        <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-cyan-500/20">
                          <span className="text-xs font-medium bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                            PDF
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground/80">
                        Click to view my complete portfolio
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative rounded-full p-2 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border border-cyan-500/20">
                      <Icons.download className="size-6 text-cyan-500 transition-transform duration-300 group-hover:translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="contact" className="w-full max-w-5xl mx-auto px-4 pb-8 sm:pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="grid items-center justify-center gap-4 text-center py-8 sm:py-12">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Contact
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground/80 md:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80"
                >
                  on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
