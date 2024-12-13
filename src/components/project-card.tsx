import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies?: readonly {
    name: string;
    icon: React.ReactNode;
  }[];
  link?: string;
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
  title,
  href,
  description,
  dates,
  technologies,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block cursor-pointer overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-video w-full">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col">
        <CardHeader className="space-y-2 p-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold tracking-tight">
              {title}
            </CardTitle>
            <time className="text-sm text-muted-foreground/80">{dates}</time>
          </div>
          <div className="line-clamp-3">
            <Markdown className="prose-sm prose max-w-full text-pretty text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <div className="flex flex-1 flex-col justify-end space-y-3 p-4 pt-0">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium"
                >
                  {tech.icon}
                  {tech.name}
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {links.map((link, idx) => {
                // Determine the variant based on link type
                const variant =
                  link.type === "GitHub"
                    ? "secondary"
                    : link.type === "Dashboard"
                    ? "outline"
                    : "default";

                return (
                  <Link
                    href={link?.href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <Badge
                      variant={variant}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
