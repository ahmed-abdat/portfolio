'use client';

import { Icons } from "@/components/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  href?: string;
  title: string;
  description: string;
  dates: string;
  technologies: readonly {
    name: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
  links?: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

export function ProjectCard({
  href,
  title,
  description,
  dates,
  technologies,
  image,
  video,
  links,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-card transition-colors hover:bg-gradient-to-r hover:from-violet-500/[0.05] hover:via-fuchsia-500/[0.05] hover:to-cyan-500/[0.05]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full flex-col">
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </AspectRatio>
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View Project</span>
            </Link>
          )}
        </div>
        <div className="flex flex-1 flex-col space-y-3 p-4 sm:p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground/80 line-clamp-2">{description}</p>
          </div>
          <div className="flex-1" />
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-500"
                >
                  <span className="size-3.5">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-2">
              <time className="text-xs text-muted-foreground">{dates}</time>
              {links && links.length > 0 && (
                <div className="flex items-center gap-1.5">
                  {links.map((link) => (
                    <Button
                      key={link.type}
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      asChild
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-500"
                      >
                        <span className="size-3.5">{link.icon}</span>
                        <span className="sr-only">{link.type}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
