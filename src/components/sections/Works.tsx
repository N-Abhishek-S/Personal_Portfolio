import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Award,
  Code2,
  Cpu,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

/* ----------------------------- Types ----------------------------- */

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  source_code_link: string;
  demo_link?: string;
  competition?: boolean;
  award?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* -------------------------- Style Tokens ------------------------- */

const TAG_COLOR_MAP: Record<string, string> = {
  "React.js": "bg-blue-500/15 text-blue-300 border-blue-500/25",
  "Tailwind CSS": "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  Appwrite: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  n8n: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  "OpenAI API": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  GSAP: "bg-green-500/15 text-green-300 border-green-500/25",
  "Three.js": "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  "Framer Motion": "bg-pink-500/15 text-pink-300 border-pink-500/25",
  JavaScript: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25",
  AI: "bg-rose-500/15 text-rose-300 border-rose-500/25",
};

const getTagClass = (tag: string): string => {
  return TAG_COLOR_MAP[tag] || "bg-gray-800/40 text-gray-300 border-gray-700";
};

const getProjectIcon = (tags: string[]) => {
  const hasAI = tags.some((t) => t.toLowerCase().includes("ai") || t.includes("OpenAI"));
  const hasAutomation = tags.some((t) => t.toLowerCase().includes("n8n"));
  if (hasAI) return Sparkles;
  if (hasAutomation) return Cpu;
  return Code2;
};

/* -------------------------- Components --------------------------- */

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const Icon = getProjectIcon(project.tags);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      className="w-full"
    >
      <Tilt
        tiltEnable={true}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor="#ffffff"
        className="h-full"
      >
        <article className="group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/55 to-gray-800/20 p-6 backdrop-blur-sm transition-all hover:border-[#915EFF]/40">
          {/* Competition Ribbon */}
          {project.competition ? (
            <div className="absolute -right-10 top-6 rotate-45 bg-gradient-to-r from-purple-500 to-pink-500 px-14 py-1">
              <span className="text-[11px] font-bold tracking-wide text-white">
                COMPETITION
              </span>
            </div>
          ) : null}

          {/* Image Preview */}
          <div className="mb-5 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-40 w-full items-center justify-center text-gray-500">
                <ImageIcon className="h-8 w-8" />
              </div>
            )}
          </div>

          {/* Header */}
          <div className="mb-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-2">
                    <Icon className="h-5 w-5 text-[#915EFF]" />
                  </div>

                  <h3 className="truncate text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.competition && project.award ? (
                <div className="flex items-center gap-1 text-yellow-300 shrink-0">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-semibold">{project.award}</span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={`${project.title}-${tag}`}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${getTagClass(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-5">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Cpu className="h-4 w-4" />
              <span>
                {project.competition ? "Competition Project" : "Personal Project"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open source code for ${project.title}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-gray-800/60 hover:text-white"
              >
                <Github className="h-4 w-4" />
                Code
              </a>

              {project.demo_link ? (
                <a
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#915EFF]/25 to-purple-500/20 px-4 py-2 text-sm font-semibold text-[#C4B5FD] transition hover:from-[#915EFF]/35 hover:to-purple-500/30"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              ) : null}
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
};

/* ----------------------------- Page ------------------------------ */

const Works: React.FC = () => {
  const projects = (config?.projects?.items ?? []) as Project[];

  return (
    <section className="relative">
      <Header useMotion={true} {...config.projects} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-base sm:text-lg text-gray-400 leading-relaxed"
      >
        {config.projects.content}
      </motion.p>

      {/* Empty state */}
      {projects.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
          <p className="text-gray-400">
            No projects added yet. Add projects inside <span className="text-white font-semibold">config.projects.items</span>.
          </p>
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${project.source_code_link}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionWrapper(Works, "projects");
