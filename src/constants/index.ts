import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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

import  gsap  from "../assets/tech/Gsap.png";
import  n8n  from "../assets/tech/N8N.png";
import  sql  from "../assets/tech/Sql.png";
import Cpp  from "../assets/tech/Cpp.png";
import Java from "../assets/tech/Java.png";


export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Tech" },
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

export const experiences: TExperience[] = [
  {
    title: "BCA Student (Final Year)",
    company: {
      name: "Dr. Babasaheb Ambedkar Marathwada University",
      color: "text-white",
    },
    type: "education",
    points: [
      "Final year BCA student focused on full-stack prototyping and frontend engineering.",
      "Building projects in AI + E-Commerce + Health domains for competitions.",
      "Improving communication skills for project pitching and presentations.",
    ],
  },
  {
    title: "React Developer & UI Builder",
    company: {
      name: "Self Projects / Freelance Practice",
      color: "text-white",
    },
    type: "project",
    points: [
      "Building responsive web apps using React, Tailwind CSS, and modern UI patterns.",
      "Creating animations and interactions using GSAP and Framer Motion.",
      "Integrating backend services (Appwrite / Firebase / Supabase) for prototypes.",
    ],
  },
  {
    title: "VeriMart - AI Shopping Assistant",
    company: {
      name: "State-Level Competition Project",
      color: "text-white",
    },
    type: "competition",
    points: [
      "Developed an AI-based recommendation + product filtering prototype.",
      "Built clean UI flow for user face analyzer + product suggestions.",
      "Worked on automation workflows using n8n for quick prototyping.",
    ],
  },
];


/* -------------------------- Testimonials -------------------------- */
/**
 * ✅ Don’t add fake testimonials.
 * One honest self-statement is enough.
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

export const projects: TProject[] = [
  {
    
    title: "VeriMart - AI Shopping Assistant",
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
    source_code_link: "https://github.com/N-Abhishek-S",
    competition: true,
    award: "State Level",
  },
  {
    title: "Mega Blog Platform",
    description:
      "Blog website built with React and backend integration for authentication and publishing.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Appwrite", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/N-Abhishek-S",
  },
  {
    title: "Paytm Clone (UI + Flow)",
    description:
      "Frontend clone focusing on UI layout, responsiveness and component architecture in React.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/N-Abhishek-S",
  },
];

