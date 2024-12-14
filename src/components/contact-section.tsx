import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section id="contact" className={`w-full ${className}`}>
      <BlurFade delay={0.04 * 16}>
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
  );
} 