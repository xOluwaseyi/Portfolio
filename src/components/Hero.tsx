"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPenNib,
} from "react-icons/fa6";
import { site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* ambient glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/5 h-80 w-80 rounded-full bg-accent-strong/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Oluwaseyi Fagbemi,{" "}
            <span className="text-gradient">Frontend Developer</span> crafting
            interfaces people enjoy using.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline} I have a track record across React, Next.js and
            TypeScript products, from translating Figma designs into
            production UI to integrating APIs and shipping features teams
            actually rely on.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.6)]"
            >
              See my experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-10 flex items-center gap-5 text-muted"
          >
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors hover:text-accent"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href={site.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              className="transition-colors hover:text-accent"
            >
              <FaPenNib size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl" />
          <div className="glow relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Oluwaseyi Fagbemi"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-surface/90 px-5 py-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Status
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Open to new opportunities
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <FaArrowDown className="animate-bounce" size={14} />
      </motion.a>
    </section>
  );
}
