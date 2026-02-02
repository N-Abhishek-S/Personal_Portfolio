import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, Star } from "lucide-react";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const ACHIEVEMENTS = [
  {
    title: "Avishkar (State-Level Selection)",
    subtitle: "Selected at state level for innovation & prototype execution",
    icon: Trophy,
    accent: "from-yellow-500/20 to-yellow-600/10",
    iconColor: "text-yellow-400",
    rating: 5,
    tags: ["State Level", "Prototype", "Pitching"],
    proof: "Recognized for product presentation + project depth.",
  },
  {
    title: "District Competition (2nd Rank)",
    subtitle: "Strong execution and clarity in problem-solving approach",
    icon: Award,
    accent: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
    rating: 4,
    tags: ["2nd Rank", "Execution", "Teamwork"],
    proof: "High score in evaluation and ranking performance.",
  },
  {
    title: "University Competition (3rd Rank)",
    subtitle: "Competitive performance among multiple project teams",
    icon: ShieldCheck,
    accent: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
    rating: 4,
    tags: ["3rd Rank", "University", "Consistency"],
    proof: "Recognition for consistency and delivery quality.",
  },
];

const Feedbacks = () => {
  return (
    <section className="relative mt-14">
      <Header
        useMotion={true}
        p="Recognition"
        h2="Achievements & Highlights"
        content="Competition performance and recognition earned through project work"
      />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-base sm:text-lg text-gray-400 leading-relaxed"
      >
        These highlights represent measurable outcomes from competitions and evaluations — not random testimonials.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/20 p-7 transition-all hover:border-[#915EFF]/40"
            >
              {/* Glow */}
              <div
                className={`absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${item.accent}`}
              />

              {/* Top Row */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-800 bg-gradient-to-br ${item.accent}`}
                  >
                    <Icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Proof */}
              <p className="relative mt-6 text-sm text-gray-300 leading-relaxed">
                {item.proof}
              </p>

              {/* Tags */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-700 bg-gray-800/40 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom line */}
              <div className="relative mt-7 flex items-center justify-between border-t border-gray-800 pt-5">
                <span className="text-xs text-gray-500">
                  Verified by competition results
                </span>

                <span className="text-xs font-medium text-[#915EFF]">
                  View details →
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Feedbacks;
