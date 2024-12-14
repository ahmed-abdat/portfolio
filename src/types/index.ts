export type SkillSlug = 
  | "javascript" | "typescript" | "react" | "nextdotjs" | "html5" | "css3" 
  | "tailwindcss" | "framer" | "radixui" | "zustand" | "reacthookform" | "zod"
  | "firebase" | "i18next" | "git" | "visualstudiocode" | "vercel" | "github" | "githubcopilot"
  | "c" | "java" | "shadcnui";

export interface Skill {
  readonly name: string;
  readonly icon: React.ReactNode;
  readonly iconSlug: SkillSlug;
} 