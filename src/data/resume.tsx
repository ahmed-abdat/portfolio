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

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
  description?: string;
  achievements?: string[];
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
      icon: <Icons.javascript />,
      iconSlug: "javascript",
    },
    {
      name: "TypeScript",
      icon: <Icons.typescript />,
      iconSlug: "typescript",
    },
    {
      name: "C",
      icon: <Icons.c />,
      iconSlug: "c",
    },
    {
      name: "Java",
      icon: <Icons.java />,
      iconSlug: "java",
    },
    {
      name: "React",
      icon: <Icons.react />,
      iconSlug: "react",
    },
    {
      name: "Next.js",
      icon: <Icons.nextjs />,
      iconSlug: "nextdotjs",
    },
    {
      name: "HTML5",
      icon: <Icons.html />,
      iconSlug: "html5",
    },
    {
      name: "CSS3",
      icon: <Icons.css />,
      iconSlug: "css3",
    },
    {
      name: "TailwindCSS",
      icon: <Icons.tailwind />,
      iconSlug: "tailwindcss",
    },
    {
      name: "Shadcn UI",
      icon: <Icons.shadcn />,
      iconSlug: "shadcnui",
    },
    {
      name: "Firebase",
      icon: <Icons.firebase />,
      iconSlug: "firebase",
    },
    {
      name: "Git",
      icon: <Icons.git />,
      iconSlug: "git",
    },
    {
      name: "VS Code",
      icon: <Icons.vscode />,
      iconSlug: "visualstudiocode",
    },
    {
      name: "Vercel",
      icon: <Icons.vercel />,
      iconSlug: "vercel",
    },
    {
      name: "GitHub",
      icon: <Icons.github />,
      iconSlug: "github",
    },
    {
      name: "Framer Motion",
      icon: <Icons.framer />,
      iconSlug: "framer",
    },
    {
      name: "Radix UI",
      icon: <Icons.radix />,
      iconSlug: "radixui",
    },
    {
      name: "Zustand",
      icon: <Icons.zustand />,
      iconSlug: "zustand",
    },
    {
      name: "React Hook Form",
      icon: <Icons.reactHookForm />,
      iconSlug: "reacthookform",
    },
    {
      name: "Zod",
      icon: <Icons.zod />,
      iconSlug: "zod",
    },
    {
      name: "i18next",
      icon: <Icons.translate />,
      iconSlug: "i18next",
    },
    {
      name: "GitHub Copilot",
      icon: <Icons.copilot />,
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
      company: "Rimcode Agency",
      href: "https://rimecode.vercel.app/",
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
      company: "SMTD",
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
      description:
        "Currently pursuing a Master's degree in electronics and automation systems, ranking 1st in M1 with focus on industrial automation and embedded systems research projects.",
    },
    {
      school: "Faculté des Sciences et Techniques",
      href: "#",
      degree: "Licence in Electronics, Electrotechnics, and Automation",
      logoUrl: "/una-logo.jpg",
      start: "2020",
      end: "2023",
      description:
        "Completed Licence degree at the Faculty of Sciences and Technology, University of Nouakchott Al-Asariyia. Graduated as major of the promotion, earning a Mauritanian government scholarship to pursue Master's studies in Tunisia.",
    },
  ] as readonly Education[],
  projects: [
    {
      title: "MBI-RIM Platform",
      href: "https://www.mbirim.com/fr",
      dates: "2024",
      active: true,
      description:
        "A leading construction group platform specializing in prefabricated buildings and construction materials.",
      technologies: [
        { name: "Next.js 14", icon: <Icons.nextjs /> },
        { name: "TypeScript", icon: <Icons.typescript /> },
        { name: "Firebase", icon: <Icons.firebase /> },
        { name: "Next-intl", icon: <Icons.translate /> },
        { name: "Framer Motion", icon: <Icons.framer /> },
        { name: "Radix UI", icon: <Icons.radix /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://www.mbirim.com/fr",
          icon: <Icons.globe />,
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
        { name: "Next.js 14", icon: <Icons.nextjs /> },
        { name: "Leaflet Maps", icon: <Icons.leaflet /> },
        { name: "Next-intl", icon: <Icons.translate /> },
        { name: "Firebase", icon: <Icons.firebase /> },
        { name: "HeadlessUI", icon: <Icons.headless /> },
        { name: "Framer Motion", icon: <Icons.framer /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://smtde.vercel.app",
          icon: <Icons.globe />,
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
        { name: "Next.js 14", icon: <Icons.nextjs /> },
        { name: "Firebase", icon: <Icons.firebase /> },
        { name: "TanStack Table", icon: <Icons.tanstack /> },
        { name: "Radix UI", icon: <Icons.radix /> },
        { name: "Framer Motion", icon: <Icons.framer /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://aesmb.vercel.app",
          icon: <Icons.globe />,
        },
        {
          type: "Admin Portal",
          href: "https://aesmb.vercel.app/dashboard",
          icon: <Icons.lock />,
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
        { name: "Vite", icon: <Icons.vite /> },
        { name: "Firebase", icon: <Icons.firebase /> },
        { name: "Zustand", icon: <Icons.zustand /> },
        {
          name: "WaveSurfer.js",
          icon: <Icons.wavesurfer />,
        },
        {
          name: "React Router",
          icon: <Icons.reactRouter />,
        },
      ],
      links: [
        {
          type: "View Project",
          href: "https://whatesapp.vercel.app",
          icon: <Icons.globe />,
        },
        {
          type: "Source Code",
          href: "https://github.com/ahmed-abdat/whatesapp-clone",
          icon: <Icons.github />,
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
        { name: "Next.js 14", icon: <Icons.nextjs /> },
        { name: "TypeScript", icon: <Icons.typescript /> },
        { name: "Firebase", icon: <Icons.firebase /> },
        { name: "Radix UI", icon: <Icons.radix /> },
        { name: "Zustand", icon: <Icons.zustand /> },
        {
          name: "React Hook Form",
          icon: <Icons.reactHookForm />,
        },
        { name: "Zod", icon: <Icons.zod /> },
      ],
      links: [
        {
          type: "View Project",
          href: "https://eco-citye.vercel.app/",
          icon: <Icons.globe />,
        },
        {
          type: "Source Code",
          href: "https://github.com/ahmed-abdat/eco-city",
          icon: <Icons.github />,
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
          icon: <Icons.globe />,
          href: "https://eco-citye.vercel.app/",
        },
      ],
    },
  ] as readonly Hackathon[],
} as const;
