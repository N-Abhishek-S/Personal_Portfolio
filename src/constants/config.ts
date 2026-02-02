// src/constants/config.ts
import type { TConfig } from "../types/index.ts";
import { creator } from "../assets";

export const config: TConfig = {
  html: {
    title: "Abhishek Nagargoje — React Developer & AI Prototyper",
    fullName: "Abhishek Nagargoje",
    email: "nagargojeabhishek96@gmail.com",
    siteUrl: "https://abhisheknagargoje.vercel.app",
    description:
      "BCA final-year student and passionate developer building modern web applications with React.js, AI integrations, and automation workflows.",
    keywords: ["React Developer", "AI Prototyper", "BCA Student", "Web Development"],
  },

  hero: {
    p: "Hi, I’m",
    h2: "Abhishek Nagargoje",
    subText: "BCA Final Year Student • React Developer • AI Prototyper",
    location: "Parli Vaidyanath, Maharashtra, India",
    availability: "Available for projects",
    links: {
      email: "nagargojeabhishek96@gmail.com",
      linkedin: "https://www.linkedin.com/in/abhishek-nagargoje-a7909a2b2/",
      github: "https://github.com/N-Abhishek-S",
    },
  },

  about: {
    p: "Introduction",
    h2: "Overview",
    subtitle: "Who I am and what I do",
    content:
      "I'm Abhishek Nagargoje, a BCA final-year student and passionate developer focused on building modern, real-world web applications.",
    education: {
      degree: "Bachelor of Computer Applications (BCA)",
      year: "3rd Year",
      university: "Dr. Babasaheb Ambedkar Marathwada University",
      college: "Vaidyanath College, Parli",
      graduation: "2026",
      performance: "Excellent academic performance",
    },
    strengths: [
      "Strong UI building with React",
      "Fast prototype development",
      "Clean frontend structure",
      "Real project experience",
    ],
    learning: ["Advanced JavaScript", "Java", "Next.js", "Cybersecurity", "Three.js"],
  },

  experience: {
    p: "My journey so far",
    h2: "Experience",
    subtitle: "Competitions, Projects & Learning",
    timeline: [
      {
        title: "State-Level AI Project Developer",
        companyName: "Avishkar Competition",
        icon: creator,
        iconBg: "#383E56",
        date: "2024 - Present",
        type: "competition",
        points: [
          "Selected for State-Level Avishkar Project.",
          "Developing AI Health & E-Commerce platform for competition pitching.",
        ],
      },
      {
        title: "Competition Project Lead",
        companyName: "University & District Level Competitions",
        icon: creator,
        iconBg: "#1F2937",
        date: "2023 - 2024",
        type: "competition",
        points: [
          "Avishkar Competition District Level: 2nd Rank.",
          "Avishkar Competition University Level: 3rd Rank.",
        ],
      },
    ],
  },

  projects: {
    p: "My work",
    h2: "Projects",
    subtitle: "Featured projects with real-world applications",
    content:
      "These projects showcase my skills in React development, UI building, backend integration, automation, and AI-based features.",
    items: [
      {
        name: "AI Health & E-Commerce Platform",
        description:
          "State-level competition prototype combining AI + E-Commerce features in one platform.",
        tags: [
          { name: "React.js", color: "blue-text-gradient" },
          { name: "Tailwind CSS", color: "green-text-gradient" },
          { name: "Appwrite", color: "pink-text-gradient" },
          { name: "n8n", color: "blue-text-gradient" },
          { name: "OpenAI API", color: "green-text-gradient" },
        ],
        image: "/projects/ai-health-ecommerce.jpg",
        sourceCodeLink: "https://github.com/N-Abhishek-S",
      },
      {
        name: "AI Shopping Assistant",
        description:
          "Competition-ready project focused on smart filtering and recommendation experience.",
        tags: [
          { name: "React.js", color: "blue-text-gradient" },
          { name: "Tailwind CSS", color: "green-text-gradient" },
          { name: "Appwrite", color: "pink-text-gradient" },
          { name: "AI", color: "blue-text-gradient" },
        ],
        image: "/projects/ai-shopping-assistant.jpg",
        sourceCodeLink: "https://github.com/N-Abhishek-S",
      },
    ],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact",
    subtitle: "Let’s build something useful",
    content: "Let's collaborate on your next project or discuss potential opportunities.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What should I call you?",
        required: true,
        type: "text",
      },
      email: {
        span: "Your Email",
        placeholder: "Where can I reach you?",
        required: true,
        type: "email",
      },
      message: {
        span: "Your Message",
        placeholder: "What would you like to discuss?",
        required: true,
        type: "textarea",
      },
    },
  },

  feedbacks: {
    p: "Feedbacks",
    h2: "Testimonials",
    subtitle: "What I focus on",
  },

  tech: {
    p: "Tech Stack",
    h2: "Technologies",
    subtitle: "Tools I use regularly",
  },
};
