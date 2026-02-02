import React, { memo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Trophy, Rocket, Code2, GraduationCap, Calendar, MapPin } from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import type { TExperience } from "../../types";

/**
 * We extend the base experience type with an optional "type"
 * only for UI badge/icon purposes.
 */
type ExperienceType = "competition" | "project" | "education";

type ExperienceItem = TExperience & {
  type?: ExperienceType;
};

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
};

const typeBadgeClass: Record<ExperienceType, string> = {
  competition: "bg-purple-500/20 text-purple-300",
  project: "bg-blue-500/20 text-blue-300",
  education: "bg-emerald-500/20 text-emerald-300",
};

const getIconByType = (type?: ExperienceType) => {
  switch (type) {
    case "competition":
      return <Trophy className="w-6 h-6" />;
    case "project":
      return <Code2 className="w-6 h-6" />;
    case "education":
      return <GraduationCap className="w-6 h-6" />;
    default:
      return <Rocket className="w-6 h-6" />;
  }
};

const getIconBgByType = (type?: ExperienceType) => {
  switch (type) {
    case "competition":
      return "#915EFF";
    case "project":
      return "#3B82F6";
    case "education":
      return "#10B981";
    default:
      return "#6B7280";
  }
};

const ExperienceCard = memo(function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const badgeType: ExperienceType = experience.type ?? "project";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(135deg, rgba(30, 30, 46, 0.85), rgba(17, 17, 26, 0.95))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "1.5rem",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        color: "#fff",
        padding: "1.5rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(145, 94, 255, 0.25)",
      }}
      date={experience.date}
      iconStyle={{
        background: getIconBgByType(badgeType),
        boxShadow: `0 0 0 4px ${getIconBgByType(badgeType)}40`,
        color: "#fff",
      }}
      icon={getIconByType(badgeType)}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-300 mb-4 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{experience.date}</span>
        </div>

        {/* Title + Badge */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${typeBadgeClass[badgeType]}`}
            >
              {badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}
            </span>
          </div>

          {/* Company */}
          <div className="flex items-center gap-2 text-[#915EFF] font-medium">
            <MapPin className="w-4 h-4" />
            <span>{experience.companyName}</span>
          </div>
        </div>

        {/* Points */}
        <ul className="space-y-3">
          {experience.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF] mt-2 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
});

function ExperienceSection() {
  const timeline = config.experience.timeline as ExperienceItem[];

  return (
    <div className="relative">
      <Header useMotion {...config.experience} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-lg text-gray-400"
      >
        {config.experience.subtitle}
      </motion.p>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.2)">
          {timeline.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(ExperienceSection, "experience");
