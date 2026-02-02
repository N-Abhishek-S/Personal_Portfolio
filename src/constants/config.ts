// constants/config.ts
import { TConfig } from "../types";

export const config: TConfig = {
  html: {
    title: "Abhishek Nagargoje — React Developer & AI Prototyper",
    fullName: "Abhishek Nagargoje",
    email: "nagargojeabhishek96@gmail.com",
    siteUrl: "https://abhisheknagargoje.vercel.app",
    description: "BCA final-year student and passionate developer building modern web applications with React.js, AI integrations, and automation workflows.",
    keywords: ["React Developer", "AI Prototyper", "BCA Student", "Web Development"]
  },

  hero: {
    name: "Abhishek Nagargoje",
    title: "BCA Final Year Student • React Developer • AI Prototyper",
    description: "Building modern web applications with React.js, AI integrations, and automation workflows.",
    location: "Parli Vaidyanath, Maharashtra, India",
    email: "nagargojeabhishek96@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhishek-nagargoje-a7909a2b2/",
    github: "https://github.com/N-Abhishek-S",
    availability: "Available for projects"
  },

  about: {
    p: "Introduction",
    h2: "Overview",
    subtitle: "Who I am and what I do",
    content: "I'm Abhishek Nagargoje, a BCA final-year student and passionate developer focused on building modern, real-world web applications.",
    education: {
      degree: "Bachelor of Computer Applications (BCA)",
      year: "3rd Year",
      university: "Dr. Babasaheb Ambedkar Marathwada University",
      college: "Vaidyanath College, Parli",
      graduation: "2026",
      performance: "Excellent academic performance"
    },
    strengths: [
      "Strong UI building with React",
      "Fast prototype development",
      "Clean frontend structure",
      "Real project experience"
    ],
    learning: [
      "Advanced JavaScript",
      "Java",
      "Next.js",
      "Cybersecurity",
      "Three.js"
    ]
  },

  contact: {
    p: "Get in touch",
    h2: "Contact",
    content: "Let's collaborate on your next project or discuss potential opportunities.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What should I call you?",
        required: true,
        type: "text"
      },
      email: {
        span: "Your Email",
        placeholder: "Where can I reach you?",
        required: true,
        type: "email"
      },
      message: {
        span: "Your Message",
        placeholder: "What would you like to discuss?",
        required: true,
        type: "textarea"
      }
    }
  },

  experience: {
    p: "My journey so far",
    h2: "Experience",
    subtitle: "Competitions, Projects & Learning",
    timeline: [
      {
        year: "2024 - Present",
        title: "State-Level AI Project Developer",
        company: "Avishkar Competition",
        type: "competition",
        points: [
          "Selected for State-Level Avishkar Project",
          "Developing AI Health & E-Commerce platform"
        ]
      },
      {
        year: "2023 - 2024",
        title: "Competition Project Lead",
        company: "University & District Level Competitions",
        type: "competition",
        points: [
          "Avishkar Competition District Level: 2nd Rank",
          "Avishkar Competition University Level: 3rd Rank"
        ]
      }
    ]
  },

  projects: {
    p: "My work",
    h2: "Projects",
    subtitle: "Featured projects with real-world applications",
    content: "These projects showcase my skills in React development, UI building, backend integration, automation, and AI-based features.",
    items: [
      {
        title: "AI Health & E-Commerce Platform",
        description: "State-level competition prototype combining AI + E-Commerce features in one platform.",
        tags: ["React.js", "Tailwind CSS", "Appwrite", "n8n", "OpenAI API"],
        image: "/projects/ai-health-ecommerce.jpg",
        source_code_link: "https://github.com/N-Abhishek-S",
        competition: true,
        award: "State-Level Selection"
      },
      {
        title: "AI Shopping Assistant",
        description: "Competition-ready project focused on recommendation and smart product experience.",
        tags: ["React.js", "Tailwind CSS", "Appwrite", "AI"],
        image: "/projects/ai-shopping-assistant.jpg",
        source_code_link: "https://github.com/N-Abhishek-S",
        demo_link: "#",
        competition: true,
        award: "University Level - 3rd Rank"
      }
    ]
  },

  skills: {
    p: "Technical expertise",
    h2: "Skills",
    subtitle: "Technologies & tools I work with",
    categories: [
      {
        category: "Frontend Development",
        skills: ["React.js", "JavaScript", "Tailwind CSS", "GSAP"]
      },
      {
        category: "Backend & Databases",
        skills: ["Appwrite", "Firebase", "API Integration"]
      }
    ]
  },

  achievements: {
    p: "Recognition & awards",
    h2: "Achievements",
    subtitle: "Competition successes and recognitions",
    items: [
      {
        title: "Avishkar Competition - State Level",
        description: "Selected for state-level presentation",
        year: "2024",
        level: "State"
      }
    ]
  }
};