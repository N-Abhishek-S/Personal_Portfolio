import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Brain,
  Layers,
  Workflow,
  Rocket,
  Award,
  GraduationCap,
  Sparkles,
  Github,   // ✅ ADD THIS
} from "lucide-react";


import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";


type PillVariant = "default" | "purple";

interface ServiceItem {
  title: string;
  icon: LucideIcon;
  accent: string; // tailwind classes
  border: string; // tailwind classes
  tags: string[];
}

interface PillProps {
  text: string;
  variant?: PillVariant;
}

interface ServiceCardProps extends ServiceItem {
  index: number;
}


const SERVICES: ServiceItem[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    accent: "from-blue-500/20 to-cyan-400/10",
    border: "hover:border-cyan-400/30",
    tags: ["JavaScript", "React.js", "Tailwind CSS", "GSAP", "Responsive UI"],
  },
  {
    title: "AI Integration",
    icon: Brain,
    accent: "from-purple-500/20 to-pink-500/10",
    border: "hover:border-purple-400/30",
    tags: [
      "OpenAI API",
      "Gemini API",
      "AI Prompting",
      "AI Workflows",
      "Recommendations",
    ],
  },
  {
    title: "Full-Stack Prototyping",
    icon: Layers,
    accent: "from-emerald-500/20 to-teal-400/10",
    border: "hover:border-emerald-400/30",
    tags: ["Appwrite", "Firebase", "Supabase", "REST APIs"],
  },
  {
    title: "Version Control",
    icon: Github, // ✅ use Github icon (import it from lucide-react)
    accent: "from-slate-500/20 to-gray-400/10",
    border: "hover:border-gray-400/30",
    tags: ["Git", "GitHub", "Branches", "Pull Requests"],
  },
  {
    title: "Programming Languages",
    icon: GraduationCap,
    accent: "from-yellow-500/20 to-orange-400/10",
    border: "hover:border-yellow-400/30",
    tags: ["JavaScript", "Java", "C", "C++"],
  },
  {
    title: "Competition Projects",
    icon: Rocket,
    accent: "from-orange-500/20 to-amber-400/10",
    border: "hover:border-amber-400/30",
    tags: ["Rapid Prototyping", "Pitching", "UI/UX Presentation"],
  },
  {
    title: "Automation",
    icon: Workflow,
    accent: "from-rose-500/20 to-red-400/10",
    border: "hover:border-red-400/30",
    tags: ["n8n", "Webhooks", "Automation Pipelines"],
  },
  {
    title: "Achievements",
    icon: Award,
    accent: "from-violet-500/20 to-indigo-400/10",
    border: "hover:border-indigo-400/30",
    tags: ["State Level", "2nd District", "3rd University"],
  },
];




const Pill: React.FC<PillProps> = ({ text, variant = "default" }) => {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition";

  const styles =
    variant === "purple"
      ? "border-purple-500/20 bg-purple-500/10 text-purple-200"
      : "border-gray-700 bg-gray-800/40 text-gray-200";

  return <span className={`${base} ${styles}`}>{text}</span>;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon: Icon,
  accent,
  border,
  tags,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.75)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#ffffff"
        className="h-full"
      >
        <div
          className={`group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/55 to-gray-800/20 p-6 backdrop-blur-sm transition-all ${border}`}
        >
          {/* Glow */}
          <div
            className={`pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${accent}`}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className={`mb-4 inline-flex items-center justify-center rounded-2xl border border-gray-800 bg-gradient-to-br ${accent} p-3`}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white">
              {title}
            </h3>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Pill key={t} text={t} />
              ))}
            </div>
          </div>

          {/* Bottom hint */}
          <div className="relative mt-6 border-t border-gray-800 pt-4">
            <span className="text-xs text-gray-500">
              Focused on clean execution and fast delivery.
            </span>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const About: React.FC = () => {
  return (
    <section className="relative">
      <Header useMotion={true} {...config.about} />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {/* About Card */}
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/55 to-gray-800/20 p-8 backdrop-blur-sm"
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {config.about.content}
            </p>

            {/* Strengths */}
            <div className="mt-7">
              <h4 className="text-white font-semibold text-lg mb-3">
                Strengths
              </h4>

              <div className="flex flex-wrap gap-2">
                {config.about.strengths.map((s: string) => (
                  <Pill key={s} text={s} variant="purple" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            className="rounded-2xl border border-gray-800 bg-gray-900/40 p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#915EFF]" />
              <h4 className="text-lg font-semibold text-white">Education</h4>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Degree</span>
                <span className="text-white font-medium text-right">
                  {config.about.education.degree}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">University</span>
                <span className="text-white font-medium text-right">
                  {config.about.education.university}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Graduation</span>
                <span className="text-white font-medium text-right">
                  {config.about.education.graduation}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            variants={fadeIn("", "", 0.3, 1)}
            className="rounded-2xl border border-purple-800/25 bg-gradient-to-br from-gray-900/50 to-purple-900/15 p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-semibold text-white">
                Currently Learning
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {config.about.learning.map((tech: string) => (
                <Pill key={tech} text={tech} variant="purple" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div>
          <motion.h3
            variants={textVariant(0.2)}
            className="text-xl sm:text-2xl font-bold text-white mb-6"
          >
            Core Expertise
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
