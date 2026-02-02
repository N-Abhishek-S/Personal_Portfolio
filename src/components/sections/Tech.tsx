import { motion } from "framer-motion";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { fadeIn } from "../../utils/motion";
import { technologies } from "../../constants";


/* ----------------------------- Types ----------------------------- */

type TechIcon = string;

interface TechnologyItem {
  name: string;
  icon: TechIcon;
}

/* ---------------------------- Guards ----------------------------- */

const isTechnologyItem = (item: unknown): item is TechnologyItem => {
  if (!item || typeof item !== "object") return false;

  const obj = item as Record<string, unknown>;

  return (
    typeof obj.name === "string" &&
    obj.name.trim().length > 0 &&
    typeof obj.icon === "string" &&
    obj.icon.trim().length > 0
  );
};

/* ---------------------------- Component -------------------------- */

const Tech = () => {
  const techList: TechnologyItem[] = Array.isArray(technologies)
    ? technologies.filter(isTechnologyItem)
    : [];

  return (
    <section className="relative">
      <Header
        useMotion={true}
        p="Skills"
        h2="Tech Stack"
        subText="Technologies I use in real projects for building modern web apps, AI prototypes, and automation."
      />

      {/* Empty state */}
      {techList.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
          <p className="text-gray-400">
            No technologies found. Add items in{" "}
            <span className="text-white font-semibold">constants</span>.
          </p>
        </div>
      ) : (
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.9)}
          className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {techList.map((technology) => (
            <article
              key={technology.name}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/55 to-gray-800/20 p-4 backdrop-blur-sm transition-all hover:border-[#915EFF]/40"
              title={technology.name}
            >
              {/* Ball */}
              <div className="h-20 w-20 sm:h-24 sm:w-24">
                <BallCanvas icon={technology.icon} />
              </div>

              {/* Label */}
              <p className="mt-3 text-center text-sm font-medium text-gray-300 transition group-hover:text-white">
                {technology.name}
              </p>

              {/* Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#915EFF]/20 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
