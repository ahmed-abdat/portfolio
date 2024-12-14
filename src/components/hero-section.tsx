import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`w-full pt-4 sm:pt-6 pb-4 sm:pb-6 ${className}`}
    >
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12">
        <div className="flex-1 text-center sm:text-left">
          <BlurFadeText
            delay={0.04}
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
        <BlurFade delay={0.04}>
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
  );
}
