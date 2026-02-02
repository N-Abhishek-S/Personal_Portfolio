import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { textVariant, fadeIn } from "../../utils/motion";

export interface IHeaderProps {
  p: string;
  h2: string;

  // ✅ Optional (your sections need it)
  subText?: string;

  // ✅ Optional with default
  useMotion?: boolean;

  // ✅ Optional alignment if you want later
  align?: "left" | "center";
}

export const Header = ({
  p,
  h2,
  subText,
  useMotion = true,
  align = "left",
}: IHeaderProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignClass}>
      {useMotion ? (
        <motion.div variants={textVariant(0.1)}>
          <p className={styles.sectionSubText}>{p}</p>
          <h2 className={styles.sectionHeadText}>{h2}</h2>
        </motion.div>
      ) : (
        <div>
          <p className={styles.sectionSubText}>{p}</p>
          <h2 className={styles.sectionHeadText}>{h2}</h2>
        </div>
      )}

      {/* ✅ subtitle support */}
      {subText ? (
        useMotion ? (
          <motion.p
            variants={fadeIn("", "", 0.15, 1)}
            className="mt-4 max-w-3xl text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            {subText}
          </motion.p>
        ) : (
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-400 leading-relaxed">
            {subText}
          </p>
        )
      ) : null}
    </div>
  );
};
