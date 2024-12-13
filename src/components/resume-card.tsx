"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
      {...(href && href !== "#" ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
    >
      <Card className="group relative overflow-hidden rounded-xl border bg-card p-4 transition-all duration-300 hover:bg-accent/50 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex-none">
            <Avatar className="size-12 border bg-muted-background dark:bg-foreground sm:size-14">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain p-0.5"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-x-2">
              <h3 className="flex items-center gap-2 font-semibold leading-none">
                <span className="text-sm sm:text-base">{title}</span>
                {badges && badges.length > 0 && (
                  <span className="inline-flex gap-1.5">
                    {badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="text-xs text-muted-foreground sm:text-sm">
                {subtitle}
              </div>
            )}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="prose prose-sm max-w-none text-pretty text-muted-foreground dark:prose-invert"
              >
                {description}
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};
