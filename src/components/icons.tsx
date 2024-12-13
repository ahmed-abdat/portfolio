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
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BsCode, BsEyeFill } from "react-icons/bs";
import { TbWaveSine } from "react-icons/tb";

export type IconProps = React.HTMLAttributes<SVGElement>;

const LocalIcon = ({
  src,
  alt,
  ...props
}: { src: string; alt: string } & IconProps) => {
  const isSvg = src.endsWith(".svg");

  return (
    <div className={`relative size-4 ${isSvg ? "dark:invert" : ""}`}>
      <Image
        src={`/icons/${src}`}
        alt={alt}
        fill
        className={`object-contain ${
          isSvg ? "dark:brightness-0 dark:invert" : ""
        }`}
      />
    </div>
  );
};

export const Icons = {
  // Navigation and general icons
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  lock: (props: IconProps) => <LockIcon {...props} />,
  demo: (props: IconProps) => <BsEyeFill {...props} />,
  download: (props: IconProps) => <DownloadIcon {...props} />,

  // Technology icons
  code: (props: IconProps) => <BsCode {...props} />,
  nextjs: (props: IconProps) => <SiNextdotjs {...props} />,
  typescript: (props: IconProps) => <SiTypescript {...props} />,
  javascript: (props: IconProps) => (
    <LocalIcon src="js.png" alt="JavaScript" {...props} />
  ),
  html: (props: IconProps) => <SiHtml5 {...props} />,
  css: (props: IconProps) => <SiCss3 {...props} />,
  react: (props: IconProps) => <SiReact {...props} />,
  tailwind: (props: IconProps) => <SiTailwindcss {...props} />,
  firebase: (props: IconProps) => <SiFirebase {...props} />,
  framer: (props: IconProps) => (
    <LocalIcon src="Framer-Motion.png" alt="Framer Motion" {...props} />
  ),
  radix: (props: IconProps) => (
    <LocalIcon src="radix.svg" alt="Radix UI" {...props} />
  ),
  vite: (props: IconProps) => <SiVite {...props} />,
  zustand: (props: IconProps) => (
    <LocalIcon src="zustand.svg" alt="Zustand" {...props} />
  ),
  reactRouter: (props: IconProps) => <SiReactrouter {...props} />,
  leaflet: (props: IconProps) => <SiLeaflet {...props} />,
  headless: (props: IconProps) => <SiHeadlessui {...props} />,
  tanstack: (props: IconProps) => <SiReacttable {...props} />,
  translate: (props: IconProps) => (
    <LocalIcon src="i18next.png" alt="i18next" {...props} />
  ),
  wavesurfer: (props: IconProps) => <TbWaveSine {...props} />,
  git: (props: IconProps) => <LocalIcon src="git.png" alt="Git" {...props} />,
  c: (props: IconProps) => <LocalIcon src="C.svg" alt="C" {...props} />,
  reactHookForm: (props: IconProps) => (
    <LocalIcon src="react-hook-form.svg" alt="React Hook Form" {...props} />
  ),
  zod: (props: IconProps) => <LocalIcon src="zod.svg" alt="Zod" {...props} />,
  vscode: (props: IconProps) => (
    <LocalIcon src="vs-code.png" alt="VS Code" {...props} />
  ),
  vercel: (props: IconProps) => (
    <LocalIcon src="vercel.png" alt="Vercel" {...props} />
  ),
  copilot: (props: IconProps) => (
    <LocalIcon src="copilot.png" alt="GitHub Copilot" {...props} />
  ),

  // Social icons
  github: (props: IconProps) => <SiGithub {...props} />,
  linkedin: (props: IconProps) => <SiLinkedin {...props} />,
  whatsapp: (props: IconProps) => <SiWhatsapp {...props} />,
};
