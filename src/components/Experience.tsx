"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-surface/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          description="A timeline of the teams, internships and projects that have shaped how I work, from my first freelance gig in 2021 to where I am today."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
          />

          <ol className="space-y-10">
            {experience.map((entry, i) => (
              <motion.li
                key={`${entry.company}-${entry.start}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.06}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 sm:h-5 sm:w-5 ${
                    entry.badge === "Current"
                      ? "border-accent bg-accent/30"
                      : "border-border bg-background"
                  }`}
                />

                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {entry.role}
                        <span className="text-muted"> · {entry.company}</span>
                      </h3>
                      {entry.location && (
                        <p className="mt-1 text-sm text-muted">{entry.location}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="whitespace-nowrap rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                        {entry.start} - {entry.end}
                      </span>
                      {entry.badge && (
                        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                          {entry.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {entry.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.stack && entry.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {entry.link && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                    >
                      {entry.linkLabel ?? `Visit ${entry.company.split(" ")[0].split("·")[0].trim()}`}
                      <FaArrowUpRightFromSquare size={12} />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
