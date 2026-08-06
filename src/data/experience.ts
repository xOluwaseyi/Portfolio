export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  link?: string;
  badge?: string;
  highlights: string[];
  stack?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "DeCentral Hub",
    role: "Frontend Developer",
    start: "Sep 2025",
    end: "Present",
    badge: "Current",
    highlights: [
      "Lead frontend developer across client projects including a food-delivery admin dashboard and a Web3 payments developer portal, built with Next.js, React and TypeScript.",
      "Built the developer portal's API key management, webhooks and billing from scratch.",
      "Built sandbox testing, transaction history and request logs.",
      "Extracted a major feature area from a production monorepo into its own standalone app, with zero disruption.",
      "Built order management with live status tracking and printable 80mm thermal receipts.",
      "Built outlet CRUD with Google Maps Places Autocomplete.",
      "Contributed to authentication, access-control and other features.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "React Hook Form", "Zod", "Google Maps API"],
  },
  {
    company: "Maxxconnection · iExplore",
    role: "Frontend Developer",
    start: "Oct 2023",
    end: "Dec 2024",
    location: "Lagos, Nigeria",
    highlights: [
      "Worked as lead frontend developer on a multi-portal web platform comprising a marketing site, customer-facing app, business portal, and admin dashboard, built with a modern React-based framework and TypeScript.",
      "Converted Figma designs into pixel-accurate, fully responsive layouts across mobile, tablet, and desktop for 30+ pages.",
      "Built a shared library of custom UI components (buttons, form inputs/search bars, modals, navigation bars, and content cards) reused across all four portals for visual and behavioral consistency.",
      "Implemented end-to-end authentication flows (signup, login, OTP verification, password recovery) for multiple user roles, integrating with backend REST APIs and managing secure token-based sessions.",
      "Built data management interfaces with live search, sorting, editing, and detail views for platform entities, connected to authenticated backend endpoints.",
      "Established the project's core client-side state management and form validation architecture.",
    ],
  },
  {
    company: "Safeticha",
    role: "Frontend Engineer",
    start: "Nov 2022",
    end: "May 2023",
    link: "https://safeticha.com/",
    highlights: [
      "Joined as the founding frontend developer.",
      "Translated early wireframes into a production-ready UI using React and Material UI.",
      "Established the component and design foundations the platform's codebase still reflects today.",
      "Integrated internal REST APIs across two dashboards, owning data fetching and UI state management with Redux and RTK, in close collaboration with a backend engineer.",
      "Worked directly with a designer across the full product lifecycle, from wireframe review to polished, responsive implementation, within a lean, two-person engineering team.",
    ],
  },
  {
    company: "HNG Internship",
    role: "Frontend Developer",
    start: "Oct 2022",
    end: "Dec 2022",
    location: "Lagos, Nigeria",
    badge: "Finalist",
    highlights: [
      "Collaborated with developers, designers and product managers to ship a full web application.",
      "Independently delivered a set of tasks across Next.js, React, Material UI, Styled Components, Chakra UI and CSS.",
      "Completed the program as a finalist.",
    ],
  },
  {
    company: "GenZtechies · Hackathon",
    role: "Frontend Developer (Lyful Med)",
    start: "Jul 2022",
    end: "Jul 2022",
    // link: "https://lyful.netlify.app/",
    badge: "Finalist",
    highlights: [
      "Built the sign-up, login and BMI calculator flows, plus features on the homepage and search page, as part of a four-person team.",
      "Implemented user authentication and authorization with the Firebase API.",
    ],
  },
  {
    company: "Quales Consulting",
    role: "Frontend Developer · Freelance",
    start: "Dec 2021",
    end: "Apr 2022",
    // link: "https://www.quales.tech/",
    highlights: [
      "Refurbished an existing company website end-to-end and layered in new features to make it more interactive.",
    ],
  },
];
