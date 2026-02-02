import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";

const BADGES = [
  { text: "🏆 Avishkar State-Level", color: "text-yellow-400 border-yellow-500/20 from-yellow-500/10 to-yellow-600/10" },
  { text: "🥈 District Level (2nd)", color: "text-green-400 border-green-500/20 from-green-500/10 to-green-600/10" },
  { text: "🥉 University Level (3rd)", color: "text-purple-400 border-purple-500/20 from-purple-500/10 to-purple-600/10" },
];

const LEARNING = ["Advanced JavaScript", "Java", "Next.js", "Cybersecurity", "Three.js"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/N-Abhishek-S",
    icon: Github,
    hover: "hover:border-[#915EFF]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhishek-nagargoje-a7909a2b2",
    icon: Linkedin,
    hover: "hover:border-blue-500",
  },
  {
    label: "Email",
    href: "mailto:nagargojeabhishek96@gmail.com",
    icon: Mail,
    hover: "hover:border-red-500",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]" />

      {/* Main Container */}
      <div className={`relative mx-auto max-w-7xl ${styles.paddingX} pt-28 lg:pt-32 pb-24`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left */}
          <div className="space-y-7">
            {/* Badge */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#915EFF]/20 to-purple-500/20 border border-[#915EFF]/30"
            >
              <div className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
              <span className="text-sm font-medium text-[#915EFF]">Available for Projects</span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#915EFF] via-[#915EFF] to-purple-400 bg-clip-text text-transparent">
                  Abhishek Nagargoje
                </span>
              </h1>

              <motion.p
                variants={fadeUp(0.15)}
                initial="hidden"
                animate="show"
                className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 font-light"
              >
                BCA Final Year Student •{" "}
                <span className="text-[#915EFF] font-medium">React Developer</span> •{" "}
                <span className="text-cyan-400 font-medium">AI Prototyper</span>
              </motion.p>

              <motion.p
                variants={fadeUp(0.25)}
                initial="hidden"
                animate="show"
                className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                Building modern web applications with{" "}
                <span className="text-[#915EFF]">React.js</span>,{" "}
                <span className="text-cyan-400">AI integrations</span>, and{" "}
                <span className="text-emerald-400">automation workflows</span>.
                Passionate about solving problems in AI + E-Commerce + Health domains.
              </motion.p>
            </div>

            {/* Achievements */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              {BADGES.map((b) => (
                <div
                  key={b.text}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${b.color}`}
                >
                  <span className="text-sm font-medium">{b.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Socials + Location */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-4"
            >
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 transition-all group ${s.hover}`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}

              <div className="hidden sm:block h-8 w-px bg-gray-700" />

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Based in Maharashtra, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right - 3D Canvas */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-3xl border border-gray-800/70 bg-gray-900/20 backdrop-blur-sm overflow-hidden">
              <ComputersCanvas />
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <motion.div
          variants={fadeUp(0.65)}
          initial="hidden"
          animate="show"
          className="mt-10 lg:mt-14"
        >
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-400">Currently Learning</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {LEARNING.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to About section">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-sm animate-pulse">Explore More</span>
            <div className="w-10 h-16 rounded-full border-2 border-[#915EFF]/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-gradient-to-b from-[#915EFF] to-purple-600"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
