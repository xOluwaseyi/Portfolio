"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiZod,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiStyledcomponents,
  SiChakraui,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { FaCubes } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiZod,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiStyledcomponents,
  SiChakraui,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFigma,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-surface/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Stack & Tools"
          title="What I build with"
          description="The languages, frameworks and tools I reach for most — picked up across freelance work, internships, hackathons and full-time roles."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={gi * 0.08}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => {
                  const Icon = iconMap[item.icon] ?? FaCubes;
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
                    >
                      <Icon className="text-accent" size={16} />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
