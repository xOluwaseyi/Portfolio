export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  link?: string;
  linkLabel?: string;
  badge?: string;
  highlights: string[];
  stack?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "DeCentral Hub",
    role: "Frontend Engineer · Part-time",
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
    link: "https://drive.google.com/file/d/1KrOYJFWAoNrY6xkmuc6u1InRvBc7Bxnl/view?usp=drive_link",
    linkLabel: "View certificate",
    badge: "Finalist",
    highlights: [
      "Advanced through every elimination stage of the program on solo builds, working across Next.js, React, Material UI, Styled Components, Chakra UI and CSS.",
      "Collaborated with developers, designers and product managers to ship Street Rates, a currency exchange rate web application built by a distributed team of contributors.",
      "Delivered two complete features on Street Rates: a five-section partnerships page and a complaint submission flow wired to REST endpoints with axios.",
      "Selected for a small team to build the cohort's showcase site in Next.js, a directory publishing every project from the internship with its live link, contributing roughly a quarter of its commits and owning the shared layout, navigation and footer the rest of the team built inside.",
      "Held merge access on that team, reviewing and merging pull requests from other contributors into the shared codebase.",
      "Contributed to Zuri Chat, an open-source Slack-style workspace app already in active development, shipping channel description editing that merged upstream after review from two maintainers.",
      "Worked ticketed tasks in Linear on Street Rates, resolving merge conflicts as shared branch updates landed on top of in-progress feature work.",
      "Completed the program as a finalist.",
    ],
  },
  {
    company: "GenZtechies · Hackathon",
    role: "Frontend Developer (Lyful Med)",
    start: "Jul 2022",
    end: "Jul 2022",
    // link: "https://lyful.netlify.app/",
    link: "https://drive.google.com/file/d/132FfRYORJqNtwrF3x3I19pf34zNLiNl_/view?usp=sharing",
    linkLabel: "View certificate",
    badge: "Finalist",
    highlights: [
      "Bootstrapped the project's Next.js and Tailwind CSS setup and built most of the app's pages, as part of a four-person team.",
      "Built sign-up and login with Firebase authentication, including the auth context managing session state across the app.",
      "Built the BMI calculator and its results page, including a custom dropdown component.",
      "Built a doctor search feature and dashboard, complete with its own sidebar and layout.",
    ],
  },
  {
    company: "Quales Consulting",
    role: "Frontend Developer · Freelance",
    start: "Dec 2021",
    end: "Jun 2022",
    // link: "https://www.quales.tech/",
    highlights: [
      "Refurbished a software testing company's marketing site, updating content across the homepage, learning and consulting pages against client specs.",
      "Built a custom auto-scrolling partner slider and a read-more/read-less content toggle in vanilla JavaScript to make the homepage more interactive.",
    ],
  },
];
