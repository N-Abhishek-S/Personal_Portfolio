import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { 
  Trophy,
  Rocket,
  Code2,
  GraduationCap,
  Calendar,
  MapPin
} from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { fadeIn, textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { TExperience } from "../../types";

// Define proper types
interface ExperienceItem extends Omit<TExperience, 'type'> {
  type?: "competition" | "project" | "education";
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const getIcon = (type?: string) => {
    switch(type) {
      case "competition": return <Trophy className="w-6 h-6" />;
      case "project": return <Code2 className="w-6 h-6" />;
      case "education": return <GraduationCap className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    }
  };

  const getIconBg = (type?: string): string => {
    switch(type) {
      case "competition": return "#915EFF";
      case "project": return "#3B82F6";
      case "education": return "#10B981";
      default: return "#6B7280";
    }
  };

  // Create date content as JSX element for the date prop
  const DateContent = () => (
    <div className="flex items-center gap-2 text-gray-300">
      <Calendar className="w-4 h-4" />
      {experience.year}
    </div>
  );

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'linear-gradient(135deg, rgba(30, 30, 46, 0.8), rgba(17, 17, 26, 0.9))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '1.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        color: '#fff',
        padding: '1.5rem'
      }}
      contentArrowStyle={{ 
        borderRight: '7px solid rgba(145, 94, 255, 0.3)'
      }}
      date={experience.year} // Keep as string for the timeline
      iconStyle={{ 
        background: getIconBg(experience.type || 'project'),
        boxShadow: `0 0 0 4px ${getIconBg(experience.type || 'project')}40`
      }}
      icon={getIcon(experience.type || 'project')}
      visible={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Custom date display inside content */}
        <div className="flex items-center gap-2 text-gray-300 mb-4 text-sm">
          <Calendar className="w-4 h-4" />
          {experience.year}
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              experience.type === 'competition' ? 'bg-purple-500/20 text-purple-300' :
              experience.type === 'project' ? 'bg-blue-500/20 text-blue-300' :
              'bg-emerald-500/20 text-emerald-300'
            }`}>
              {(experience.type || 'project').charAt(0).toUpperCase() + (experience.type || 'project').slice(1)}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-[#915EFF] font-medium">
            <MapPin className="w-4 h-4" />
            {experience.company}
          </div>
        </div>

        <ul className="space-y-3">
          {experience.points.map((point: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <Header useMotion={true} {...config.experience} />
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-lg text-gray-400"
      >
        {config.experience.subtitle}
      </motion.p>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.2)">
          {config.experience.timeline.map((experience: ExperienceItem, index: number) => (
            <ExperienceCard 
              key={`experience-${index}`} 
              experience={experience} 
              index={index} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");