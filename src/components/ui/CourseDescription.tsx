import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CourseDescriptionProps {
  description: string;
}

export default function CourseDescription({
  description,
}: CourseDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const wordLimit = 70;
  const words = description.split(" ");

  const isLong = words.length > wordLimit;
  const shortText = words.slice(0, wordLimit).join(" ") + "...";

  return (
    <div className="mt-4 space-y-2">
      <AnimatePresence mode="wait">
        <motion.p
          key={expanded ? "full" : "short"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 overflow-hidden"
        >
          {expanded || !isLong ? description : shortText}
        </motion.p>
      </AnimatePresence>

      {isLong && (
        <button
          onClick={toggleExpanded}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {expanded ? "Скрыть" : "Читать далее"}
        </button>
      )}
    </div>
  );
}
