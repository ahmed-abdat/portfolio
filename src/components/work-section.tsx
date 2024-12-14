'use client';

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

interface WorkSectionProps {
  className?: string;
}

export function WorkSection({ className }: WorkSectionProps) {
  return (
    <section id="work" className={cn("w-full py-8", className)}>
      <div className="flex min-h-0 flex-col gap-4">
        <BlurFade delay={0.04 * 5}>
          <div className="flex justify-center sm:justify-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10">
              <span className="text-base font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </div>
          </div>
        </BlurFade>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={0.04 * 6 + id * 0.05}>
              <AccordionItem
                value={work.company}
                className="group border-none [&[data-state=open]]:bg-card"
              >
                <AccordionTrigger
                  className="rounded-2xl bg-card hover:bg-gradient-to-r hover:from-violet-500/[0.05] hover:via-fuchsia-500/[0.05] hover:to-cyan-500/[0.05] p-4 transition-colors [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b [&[data-state=open]]:border-border/50 [&>svg]:hidden hover:no-underline"
                >
                  <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="relative size-12 overflow-hidden rounded-xl border border-white/10">
                        {work.logoUrl && (
                          <Image
                            src={work.logoUrl}
                            alt={work.company}
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
                            {work.company}
                          </h3>
                          {work.badges?.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-500"
                            >
                              {badge}
                            </span>
                          ))}
                          <div className="flex-1" />
                          {work.href && (
                            <Link
                              href={work.href}
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
                          {work.title}
                        </p>
                        <time className="text-xs text-muted-foreground/60">
                          {work.start} - {work.end ?? "Present"}
                        </time>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-3 bg-card/50">
                  <p className="text-sm text-muted-foreground/80">
                    {work.description}
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