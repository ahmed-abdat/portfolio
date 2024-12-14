import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

interface AchievementsSectionProps {
  className?: string;
}

export function AchievementsSection({ className = "" }: AchievementsSectionProps) {
  return (
    <section id="achievements" className={`w-full ${className}`}>
      <BlurFade delay={0.04 * 8}>
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
  );
} 