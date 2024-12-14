import { GlobeIcon, MailIcon, LockIcon, DownloadIcon } from "lucide-react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiVite,
  SiReactrouter,
  SiLeaflet,
  SiHeadlessui,
  SiReacttable,
  SiLinkedin,
  SiWhatsapp,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BsCode, BsEyeFill } from "react-icons/bs";
import { TbWaveSine } from "react-icons/tb";
import { cn } from "@/lib/utils";

export type IconProps = React.SVGProps<SVGSVGElement>;

const LocalIcon = ({
  src,
  alt,
  className,
  ...props
}: { src: string; alt: string; className?: string } & IconProps) => {
  const isSvg = src.endsWith(".svg");

  return (
    <div className={cn(
      "relative w-full h-full flex items-center justify-center",
      className
    )}>
      <Image
        src={`/icons/${src}`}
        alt={alt}
        fill
        className={cn(
          "object-contain w-full h-full",
          isSvg && "dark:invert",
          className
        )}
        style={{
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      />
    </div>
  );
};

const SVGIcon = ({
  icon: Icon,
  className,
  ...props
}: {
  icon: React.ComponentType<IconProps>;
  className?: string;
} & Omit<IconProps, "ref" | "className">) => (
  <div
    className={cn(
      "relative w-full h-full flex items-center justify-center",
      className
    )}
  >
    <Icon
      {...props}
      style={{ 
        width: "100%", 
        height: "100%", 
        ...props.style 
      }}
    />
  </div>
);

export const Icons = {
  // Navigation icons
  globe: (props: IconProps) => <SVGIcon icon={GlobeIcon} className="dark:text-white" {...props} />,
  email: (props: IconProps) => <SVGIcon icon={MailIcon} className="dark:text-white" {...props} />,
  lock: (props: IconProps) => <SVGIcon icon={LockIcon} className="dark:text-white" {...props} />,
  demo: (props: IconProps) => <SVGIcon icon={BsEyeFill} className="dark:text-white" {...props} />,
  download: (props: IconProps) => <SVGIcon icon={DownloadIcon} className="dark:text-white" {...props} />,
  code: (props: IconProps) => <SVGIcon icon={BsCode} className="dark:text-white" {...props} />,

  // Technology icons
  javascript: (props: IconProps) => (
    <LocalIcon src="js.png" alt="JavaScript" {...props} />
  ),
  typescript: (props: IconProps) => (
    <SVGIcon 
      icon={SiTypescript} 
      className="text-[#3178C6] dark:text-blue-400" 
      {...props} 
    />
  ),
  react: (props: IconProps) => (
    <SVGIcon 
      icon={SiReact} 
      className="text-[#61DAFB] dark:text-cyan-400" 
      {...props} 
    />
  ),
  nextjs: (props: IconProps) => (
    <LocalIcon src="next.jpeg" alt="Next.js" {...props} />
  ),
  html: (props: IconProps) => (
    <SVGIcon 
      icon={SiHtml5} 
      className="text-[#E34F26] dark:text-orange-500" 
      {...props} 
    />
  ),
  css: (props: IconProps) => (
    <SVGIcon 
      icon={SiCss3} 
      className="text-[#1572B6] dark:text-blue-500" 
      {...props} 
    />
  ),
  tailwind: (props: IconProps) => (
    <SVGIcon 
      icon={SiTailwindcss} 
      className="text-[#06B6D4] dark:text-cyan-400" 
      {...props} 
    />
  ),
  shadcn: (props: IconProps) => (
    <LocalIcon 
      src="shadcn.svg" 
      alt="Shadcn UI" 
      className="dark:invert" 
      {...props} 
    />
  ),
  firebase: (props: IconProps) => (
    <SVGIcon 
      icon={SiFirebase} 
      className="text-[#FFCA28] dark:text-yellow-400" 
      {...props} 
    />
  ),
  c: (props: IconProps) => (
    <LocalIcon 
      src="C.svg" 
      alt="C" 
      className="dark:invert" 
      {...props} 
    />
  ),
  java: (props: IconProps) => (
    <LocalIcon 
      src="java.svg" 
      alt="Java" 
      className="dark:invert" 
      {...props} 
    />
  ),
  framer: (props: IconProps) => (
    <LocalIcon src="Framer-Motion.png" alt="Framer Motion" {...props} />
  ),
  radix: (props: IconProps) => (
    <LocalIcon 
      src="radix.svg" 
      alt="Radix UI" 
      className="dark:invert" 
      {...props} 
    />
  ),
  vite: (props: IconProps) => (
    <SVGIcon 
      icon={SiVite} 
      className="text-[#646CFF] dark:text-purple-400" 
      {...props} 
    />
  ),
  zustand: (props: IconProps) => (
    <LocalIcon 
      src="zustand.svg" 
      alt="Zustand" 
      className="dark:invert" 
      {...props} 
    />
  ),
  reactHookForm: (props: IconProps) => (
    <LocalIcon 
      src="react-hook-form.svg" 
      alt="React Hook Form" 
      className="dark:invert" 
      {...props} 
    />
  ),
  zod: (props: IconProps) => (
    <LocalIcon 
      src="zod.svg" 
      alt="Zod" 
      className="dark:invert" 
      {...props} 
    />
  ),
  vscode: (props: IconProps) => (
    <LocalIcon src="vs-code.png" alt="VS Code" {...props} />
  ),
  vercel: (props: IconProps) => (
    <LocalIcon 
      src="vercel.svg" 
      alt="Vercel" 
      className="dark:invert" 
      {...props} 
    />
  ),
  copilot: (props: IconProps) => (
    <LocalIcon src="copilot.png" alt="GitHub Copilot" {...props} />
  ),
  git: (props: IconProps) => (
    <LocalIcon src="git.png" alt="Git" {...props} />
  ),
  translate: (props: IconProps) => (
    <LocalIcon src="i18next.png" alt="i18next" {...props} />
  ),
  leaflet: (props: IconProps) => (
    <SVGIcon 
      icon={SiLeaflet} 
      className="dark:text-green-400" 
      {...props} 
    />
  ),
  headless: (props: IconProps) => (
    <SVGIcon 
      icon={SiHeadlessui} 
      className="dark:text-white" 
      {...props} 
    />
  ),
  tanstack: (props: IconProps) => (
    <SVGIcon 
      icon={SiReacttable} 
      className="dark:text-red-400" 
      {...props} 
    />
  ),
  reactRouter: (props: IconProps) => (
    <SVGIcon 
      icon={SiReactrouter} 
      className="dark:text-red-400" 
      {...props} 
    />
  ),
  wavesurfer: (props: IconProps) => (
    <SVGIcon 
      icon={TbWaveSine} 
      className="dark:text-blue-400" 
      {...props} 
    />
  ),

  // Social icons
  github: (props: IconProps) => (
    <LocalIcon 
      src="github.svg" 
      alt="GitHub" 
      className="dark:invert" 
      {...props} 
    />
  ),
  linkedin: (props: IconProps) => (
    <SVGIcon 
      icon={SiLinkedin} 
      className="text-[#0A66C2] dark:text-blue-400" 
      {...props} 
    />
  ),
  whatsapp: (props: IconProps) => (
    <SVGIcon 
      icon={SiWhatsapp} 
      className="text-[#25D366] dark:text-green-400" 
      {...props} 
    />
  ),
};
