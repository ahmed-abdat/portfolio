import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly {
    name: string;
    icon: React.ReactNode;
  }[];
  links: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
}

interface Work {
  company: string;
  href: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
}

interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: readonly {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

interface Social {
  name: string;
  url: string;
  icon: (props: any) => React.ReactNode;
  navbar: boolean;
}

export const DATA = {
  name: "Ahmed Abdellahi Abdat",
  initials: "AA",
  url: "https://ahmed-abdat.dev",
  location: "Zarzouna, Bizerte, Tunisia",
  locationLink: "https://www.google.com/maps/place/Zarzouna",
  description:
    "Full Stack Developer specializing in modern web technologies and innovative solutions. Building impactful applications with React, Next.js, and cutting-edge tools.",
  summary:
    "Passionate Full Stack Developer with expertise in building modern web applications.\n" +
    "As the founder of a web & mobile development agency, I've successfully delivered diverse projects from real-time messaging apps to comprehensive management platforms.\n" +
    "I specialize in React.js, Next.js, TypeScript, and modern web technologies, with a strong focus on creating intuitive user experiences and scalable solutions.\n" +
    "Currently expanding my expertise in React Native and exploring advanced state management patterns.",
  avatarUrl: "/me.png",
  skills: [
    {
      name: "JavaScript",
      icon: <Icons.javascript className="size-4" />,
      iconSlug: "javascript",
    },
    {
      name: "TypeScript",
      icon: <Icons.typescript className="size-4" />,
      iconSlug: "typescript",
    },
    {
      name: "React",
      icon: <Icons.react className="size-4" />,
      iconSlug: "react",
    },
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-4" />,
      iconSlug: "nextdotjs",
    },
    {
      name: "HTML5",
      icon: <Icons.html className="size-4" />,
      iconSlug: "html5",
    },
    {
      name: "CSS3",
      icon: <Icons.css className="size-4" />,
      iconSlug: "css3",
    },
    {
      name: "TailwindCSS",
      icon: <Icons.tailwind className="size-4" />,
      iconSlug: "tailwindcss",
    },
    {
      name: "Firebase",
      icon: <Icons.firebase className="size-4" />,
      iconSlug: "firebase",
    },
    {
      name: "Git",
      icon: <Icons.git className="size-4" />,
      iconSlug: "git",
    },
    {
      name: "VS Code",
      icon: <Icons.vscode className="size-4" />,
      iconSlug: "visualstudiocode",
    },
    {
      name: "Vercel",
      icon: <Icons.vercel className="size-4" />,
      iconSlug: "vercel",
    },
    {
      name: "GitHub",
      icon: <Icons.github className="size-4" />,
      iconSlug: "github",
    },
    {
      name: "Framer Motion",
      icon: <Icons.framer className="size-4" />,
      iconSlug: "framer",
    },
    {
      name: "Radix UI",
      icon: <Icons.radix className="size-4" />,
      iconSlug: "radixui",
    },
    {
      name: "Zustand",
      icon: <Icons.zustand className="size-4" />,
      iconSlug: "zustand",
    },
    {
      name: "React Hook Form",
      icon: <Icons.reactHookForm className="size-4" />,
      iconSlug: "reacthookform",
    },
    {
      name: "Zod",
      icon: <Icons.zod className="size-4" />,
      iconSlug: "zod",
    },
    {
      name: "i18next",
      icon: <Icons.translate className="size-4" />,
      iconSlug: "i18next",
    },
    {
      name: "GitHub Copilot",
      icon: <Icons.copilot className="size-4" />,
      iconSlug: "githubcopilot",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmedeabdat@gmail.com",
    tel: "+22242049074",
    cvUrl: "/cv.pdf",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmed-abdat/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-abdat/",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/22242049074",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ahmedeabdat@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      resume: {
        name: "Download CV",
        url: "/cv.pdf",
        icon: Icons.download,
        navbar: false,
      },
    } as Record<string, Social>,
  },
  work: [
    {
      company: "Web & Mobile Development Agency",
      href: "#",
      badges: ["Founder"],
      location: "Tunisia",
      title: "Founder & Full Stack Developer",
      logoUrl: "/logos/agency-logo.png",
      start: "2024/11",
      end: "Present",
      description:
        "Founded and lead a web & mobile development agency specializing in modern web technologies and innovative solutions for businesses and startups. Building projects with React, Next.js, TypeScript, and modern web technologies.",
    },
    {
      company: "AESMB League",
      href: "https://aesmb.vercel.app",
      location: "Tunisia",
      title: "Full Stack Developer",
      logoUrl: "/logos/aesmb.jpg",
      start: "2024/10",
      end: "2024/11",
      description:
        "Architected and implemented a comprehensive football league management platform featuring both public-facing website and secure admin dashboard. Built with Next.js 14, integrated with Firebase for real-time updates, and implemented advanced data tables using TanStack Table.",
    },
    {
      company: "SMTD (Société Mauritanienne de Traitement des Déchets)",
      href: "https://smtde.vercel.app",
      location: "Tunisia",
      title: "Full Stack Developer",
      logoUrl: "/logos/smtd.svg",
      start: "2024/08",
      end: "2024/09",
      description:
        "Developed and deployed a bilingual (French/Arabic) platform for Mauritania's national waste management leader. Implemented interactive maps using Leaflet, real-time data management with Firebase, and responsive design with HeadlessUI and Framer Motion.",
    },
    {
      company: "MBI-RIM",
      href: "https://www.mbirim.com/fr",
      location: "Tunisia",
      title: "Full Stack Developer",
      logoUrl: "/logos/mbirim.jpeg",
      start: "2024/06",
      end: "2024/07",
      description:
        "Led the development of a comprehensive platform for a leading construction group specializing in prefabricated buildings. Implemented multilingual support, interactive UI components, and integrated content management system using Next.js 14, TypeScript, and Firebase.",
    },
  ] as readonly Work[],
  education: [
    {
      school: "Faculté des Sciences de Bizerte",
      href: "#",
      degree: "Master's in Electronics, Electrotechnics, and Automation",
      logoUrl: "/fsb-logo.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Université de Nouakchott Al-Asariyia",
      href: "#",
      degree: "Bachelor's in Electronics, Electrotechnics, and Automation",
      logoUrl: "/una-logo.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "MBI-RIM Platform",
      href: "https://www.mbirim.com/fr",
      dates: "2024",
      active: true,
      description:
        "A leading construction group platform specializing in prefabricated buildings and construction materials.",
      technologies: [
        { name: "Next.js 14", icon: <Icons.nextjs className="size-4" /> },
        { name: "TypeScript", icon: <Icons.typescript className="size-4" /> },
        { name: "Firebase", icon: <Icons.firebase className="size-4" /> },
        { name: "Next-intl", icon: <Icons.translate className="size-4" /> },
        { name: "Framer Motion", icon: <Icons.framer className="size-4" /> },
        { name: "Radix UI", icon: <Icons.radix className="size-4" /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://www.mbirim.com/fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mbi-rim.png",
    },
    {
      title: "SMTD Platform",
      href: "https://smtde.vercel.app",
      dates: "2024",
      active: true,
      description:
        "National leader in integrated waste management, SMTD transforms environmental challenges into sustainable opportunities. Built with internationalization support (French/Arabic).",
      technologies: [
        { name: "Next.js 14", icon: <Icons.nextjs className="size-4" /> },
        { name: "Leaflet Maps", icon: <Icons.leaflet className="size-4" /> },
        { name: "Next-intl", icon: <Icons.translate className="size-4" /> },
        { name: "Firebase", icon: <Icons.firebase className="size-4" /> },
        { name: "HeadlessUI", icon: <Icons.headless className="size-4" /> },
        { name: "Framer Motion", icon: <Icons.framer className="size-4" /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://smtde.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/smtd.png",
    },
    {
      title: "AESMB League Platform",
      href: "https://aesmb.vercel.app",
      dates: "2024",
      active: true,
      description:
        "A comprehensive football league management platform featuring a public website and a secure admin dashboard. The platform manages the AESMB Football League 2024-2025.",
      technologies: [
        { name: "Next.js 14", icon: <Icons.nextjs className="size-4" /> },
        { name: "Firebase", icon: <Icons.firebase className="size-4" /> },
        { name: "TanStack Table", icon: <Icons.tanstack className="size-4" /> },
        { name: "Radix UI", icon: <Icons.radix className="size-4" /> },
        { name: "Framer Motion", icon: <Icons.framer className="size-4" /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://aesmb.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Admin Portal",
          href: "https://aesmb.vercel.app/dashboard",
          icon: <Icons.lock className="size-3" />,
        },
      ],
      image: "/projects/aesmb.png",
    },
    {
      title: "WhatsApp Clone",
      href: "https://whatesapp.vercel.app",
      dates: "2023",
      active: true,
      description:
        "A real-time messaging application with authentication, friend lists, and real-time chat features.",
      technologies: [
        { name: "Vite", icon: <Icons.vite className="size-4" /> },
        { name: "Firebase", icon: <Icons.firebase className="size-4" /> },
        { name: "Zustand", icon: <Icons.zustand className="size-4" /> },
        {
          name: "WaveSurfer.js",
          icon: <Icons.wavesurfer className="size-4" />,
        },
        {
          name: "React Router",
          icon: <Icons.reactRouter className="size-4" />,
        },
      ],
      links: [
        {
          type: "View Project",
          href: "https://whatesapp.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/ahmed-abdat/whatesapp-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/whatsapp-clone.png",
    },
    {
      title: "Eco-City Application",
      href: "https://eco-citye.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A platform allowing citizens to report urban issues such as illegal constructions and sanitary problems. Won 3rd place in the AIESEC hackathon.",
      technologies: [
        { name: "Next.js 14", icon: <Icons.nextjs className="size-4" /> },
        { name: "TypeScript", icon: <Icons.typescript className="size-4" /> },
        { name: "Firebase", icon: <Icons.firebase className="size-4" /> },
        { name: "Radix UI", icon: <Icons.radix className="size-4" /> },
        { name: "Zustand", icon: <Icons.zustand className="size-4" /> },
        {
          name: "React Hook Form",
          icon: <Icons.reactHookForm className="size-4" />,
        },
        { name: "Zod", icon: <Icons.zod className="size-4" /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://eco-citye.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/ahmed-abdat/eco-city",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/eco-city.png",
    },
  ] as readonly Project[],
  hackathons: [
    {
      title: "AIESEC Hackathon",
      dates: "2023",
      location: "Tunisia",
      description:
        "Developed the Eco-City platform for urban issue reporting, winning 3rd place.",
      image: "/hackathons/aiesec.svg",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://eco-citye.vercel.app/",
        },
      ],
    },
  ] as readonly Hackathon[],
} as const;
