"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
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

  const handleCardClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expansion when clicking the link
  };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-4 transition-all duration-300 hover:bg-accent/50 sm:p-6",
        description && "cursor-pointer"
      )}
      onClick={handleCardClick}
    >
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
            <div className="flex items-center gap-2">
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
              </h3>
              {href && href !== "#" && (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLinkIcon className="size-3" />
                  <span>Visit</span>
                </Link>
              )}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 transform transition-all duration-300 ease-out ml-1",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </div>
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
              className="overflow-hidden"
            >
              <p className="text-sm text-muted-foreground/90 mt-2">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};
