export interface SkillGroup {
  label: string;
  items: { name: string; icon: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
    ],
  },
  {
    label: "Frameworks & State",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Redux / RTK", icon: "SiRedux" },
      { name: "Zustand", icon: "" },
      { name: "Zod", icon: "SiZod" },
    ],
  },
  {
    label: "Styling & UI",
    items: [
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "shadcn/ui", icon: "SiShadcnui" },
      { name: "Material UI", icon: "SiMui" },
      { name: "Styled Components", icon: "SiStyledcomponents" },
      { name: "Chakra UI", icon: "SiChakraui" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Figma", icon: "SiFigma" },
      { name: "AOS", icon: "" },
    ],
  },
];
