"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const paragraphs = [
  "I wrote my first lines of production frontend code in late 2021, refurbishing a company website as a freelancer — and I've been chasing that feeling of watching a design come alive in the browser ever since. Since then I've gone from intern to hackathon finalist to full-time engineer, working with teams across Nigeria and, more recently, the UK.",
  "Alongside the code, I'm completing a degree in English at the University of Ilorin (2022–2026) — a combination that's sharpened how I communicate, document and collaborate with designers, backend engineers and product teams, not just how I write components.",
  "These days I care about the small things that make an interface feel right — performance, accessibility, motion that earns its keep — and about being someone a team can hand a Figma file to and trust to ship something solid, end to end.",
];

const stats = [
  { value: "4+ yrs", label: "Writing frontend code, from freelance gigs to full-time roles" },
  { value: "6", label: "Teams collaborated with across startups, internships & hackathons" },
  { value: "2×", label: "Finalist — HNG Internship and Gen Z Hackathon" },
  { value: "2 crafts", label: "Balancing a degree in English with a career in frontend development" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="About"
          title="A bit about my journey so far"
        />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i * 0.1}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i * 0.08}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <p className="text-2xl font-semibold text-gradient sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
