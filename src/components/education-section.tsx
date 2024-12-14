'use client'

import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EducationSectionProps {
  className?: string;
}

export function EducationSection({ className }: EducationSectionProps) {
  return (
    <section id="education" className={cn("w-full py-8", className)}>
      <div className="flex min-h-0 flex-col gap-4">
        <BlurFade delay={0.04 * 7}>
          <div className="flex justify-center sm:justify-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
              <span className="text-base font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Education
              </span>
            </div>
          </div>
        </BlurFade>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={0.04 * 8 + id * 0.05}>
              <AccordionItem
                value={education.school}
                className="group border-none [&[data-state=open]]:bg-card"
              >
                <AccordionTrigger
                  className="rounded-2xl bg-card hover:bg-gradient-to-r hover:from-violet-500/[0.05] hover:via-fuchsia-500/[0.05] hover:to-cyan-500/[0.05] p-4 transition-colors [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b [&[data-state=open]]:border-border/50 [&>svg]:hidden hover:no-underline"
                >
                  <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="relative size-12 overflow-hidden rounded-xl border border-white/10">
                        {education.logoUrl && (
                          <Image
                            src={education.logoUrl}
                            alt={education.school}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-0.5 text-left">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-medium truncate">
                            {education.school}
                          </h3>
                          <div className="flex-1" />
                          {education.href && (
                            <Link
                              href={education.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="text-xs">Visit</span>
                              <Icons.globe className="size-3.5" />
                            </Link>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {education.degree}
                        </p>
                        <time className="text-xs text-muted-foreground/60">
                          {education.start} - {education.end}
                        </time>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-3 bg-card/50">
                  <p className="text-sm text-muted-foreground/80">
                    {education.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 