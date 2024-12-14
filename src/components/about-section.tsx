import BlurFade from "@/components/magicui/blur-fade";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className = "" }: AboutSectionProps) {
  return (
    <section id="about" className={`w-full pb-4 ${className}`}>
      <BlurFade delay={0.04 * 3}>
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
                Passionate Full Stack Developer with expertise in building modern
                web applications. As the founder of a web & mobile development
                agency, I&apos;ve successfully delivered diverse projects from
                real-time messaging apps to comprehensive management platforms.
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
  );
} 