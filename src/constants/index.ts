import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types/index.ts";

import {
  web,
  mobile,
  backend,
  creator,

  html,
  css,
  javascript,
  reactjs,
  tailwind,
  threejs,

  git,
  github,

  carrent,
  jobit,
  tripguide,
} from "../assets";

import gsap from "../assets/tech/Gsap.png";
import n8n from "../assets/tech/N8N.png";
import sql from "../assets/tech/Sql.png";
import Cpp from "../assets/tech/Cpp.png";
import Java from "../assets/tech/Java.png";

/* ---------------------------- Nav Links --------------------------- */

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ---------------------------- Services --------------------------- */

export const services: TService[] = [
  { title: "Frontend Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "AI Prototyper", icon: backend },
  { title: "Automation Builder (n8n)", icon: creator },
];

/* ------------------------- Technologies -------------------------- */

export const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React.js", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },

  { name: "Git", icon: git },
  { name: "GitHub", icon: github },

  { name: "GSAP", icon: gsap },
  { name: "n8n", icon: n8n },
  { name: "SQL", icon: sql },

  { name: "C++", icon: Cpp },
  { name: "Java", icon: Java },
];

/* --------------------------- Experience -------------------------- */
/**
 * Must match:
 * TExperience = { companyName, iconBg, date, points } + { title, icon }
 */
export const experiences: TExperience[] = [
  {
    title: "BCA Student (Final Year)",
    companyName: "Dr. Babasaheb Ambedkar Marathwada University",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - 2026",
    points: [
      "Final year BCA student focused on full-stack prototyping and frontend engineering.",
      "Building projects in AI + E-Commerce + Health domains for competitions.",
      "Improving communication skills for project pitching and presentations.",
    ],
  },
  {
    title: "React Developer & UI Builder",
    companyName: "Self Projects / Freelance Practice",
    icon: web,
    iconBg: "#1F2937",
    date: "2024 - Present",
    points: [
      "Building responsive web apps using React, Tailwind CSS, and modern UI patterns.",
      "Creating animations and interactions using GSAP and Framer Motion.",
      "Integrating backend services (Appwrite / Firebase / Supabase) for prototypes.",
    ],
  },
  {
    title: "VeriMart - AI Shopping Assistant",
    companyName: "State-Level Competition Project",
    icon: creator,
    iconBg: "#2A2A2A",
    date: "2025 - 2026",
    points: [
      "Developed an AI-based recommendation + product filtering prototype.",
      "Built clean UI flow for user face analyzer + product suggestions.",
      "Worked on automation workflows using n8n for quick prototyping.",
    ],
  },
];

/* -------------------------- Testimonials -------------------------- */
/**
 * Must match:
 * TTestimonial = {testimonial, designation, company, image} + {name}
 */
export const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Focused on building fast prototypes with clean UI, real features, and strong presentations for competitions.",
    name: "Abhishek Nagargoje",
    designation: "BCA Final Year Student",
    company: "Portfolio",
    image:
      "https://ui-avatars.com/api/?name=Abhishek+Nagargoje&background=915EFF&color=fff",
  },
];

/* ---------------------------- Projects --------------------------- */
/**
 * Must match:
 * TProject = {description, tags, image, sourceCodeLink} + {name}
 */
export const projects: TProject[] = [
  {
    name: "VeriMart - AI Shopping Assistant",
    description:
      "AI-based prototype that recommends products with smart filtering and UI-first experience for competitions.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
      { name: "AI", color: "blue-text-gradient" },
      { name: "n8n", color: "green-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/N-Abhishek-S",
  },
  {
    name: "Mega Blog Platform",
    description:
      "Blog website built with React and backend integration for authentication and publishing.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Appwrite", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/N-Abhishek-S",
  },
  {
    name: "Paytm Clone (UI + Flow)",
    description:
      "Frontend clone focusing on UI layout, responsiveness and component architecture in React.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/N-Abhishek-S",
  },
];
