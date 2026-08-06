"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const paragraphs = [
  "Frontend Developer with 4+ years of experience turning designs into interactive, accessible web experiences, both independently and as part of a team.",
  "I care about the small details that make an interface feel right, communicate clearly with designers and engineers, and enjoy picking up new tools as projects call for them.",
];

const cta = "Open to new opportunities. Let's connect.";

const stats = [
  { value: "4+ yrs", label: "Writing frontend code, from freelance gigs to full-time roles" },
  { value: "6", label: "Teams collaborated with across startups, internships & hackathons" },
  { value: "2×", label: "Finalist · HNG Internship and Gen Z Hackathon" },
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
                key={text}
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

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.3}
              className="text-base font-medium text-foreground sm:text-lg"
            >
              {cta}
            </motion.p>
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
