"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPenNib,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { site } from "@/data/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "@xoluwaseyi",
    href: site.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "/in/oluwaseyifagbemi",
    href: site.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Blog",
    value: "Hashnode blog",
    href: site.blog,
    icon: FaPenNib,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
          >
            Get in touch
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Open to new opportunities — let&apos;s build something good together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.18}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted"
          >
            Whether it&apos;s a frontend role, a freelance project, or just a
            chat about building better interfaces — my inbox is open.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.26}
            className="mt-9"
          >
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.6)]"
            >
              Say hello
              <FaArrowUpRightFromSquare size={12} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.34}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <Icon className="text-accent" size={16} />
                {value}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>
            Built by{" "}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              Oluwaseyi Fagbemi
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
