"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Education"
          title="What I studied alongside the code"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-7"
        >
          <div>
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-muted sm:text-base">
              {education.degree}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="whitespace-nowrap rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
              {education.start} - {education.end}
            </span>
            {education.badge && (
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {education.badge}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
