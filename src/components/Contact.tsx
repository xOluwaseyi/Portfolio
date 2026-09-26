"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPenNib,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { site } from "@/data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

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

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50";
const labelClasses = "mb-1.5 block text-xs font-medium text-muted";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.26}
      className="mx-auto mt-9 max-w-xl text-left"
    >
      {/* honeypot field, hidden from real visitors, filters basic spam bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Your message"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.6)] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          {status !== "submitting" && <FaArrowUpRightFromSquare size={12} />}
        </button>

        {status === "success" && (
          <p className="text-sm text-accent">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Try emailing me directly instead.
          </p>
        )}
      </div>
    </motion.form>
  );
}

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
            Open to new opportunities. Let&apos;s build something good together.
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
            chat about building better interfaces. My inbox is open.
          </motion.p>

          <ContactForm />

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
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
