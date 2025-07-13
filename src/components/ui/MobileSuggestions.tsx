"use client";
// components/MobileSuggestions.tsx
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/services/courseService";
import { useEffect, useState } from "react";

interface MobileSuggestionsProps {
  courses: Course[];
  onClose: () => void;
}

export default function MobileSuggestions({
  courses,
  onClose,
}: MobileSuggestionsProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 10); // короткая задержка
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`sm:hidden fixed top-16 left-0 right-0 z-40 p-4 overflow-auto transition-all duration-500 ease-in-out backdrop-blur-sm
        ${animate ? "bg-white dark:bg-gray-900" : "bg-background/80"}`}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 text-2xl"
        aria-label="Close"
      >
        ×
      </button>
      <ul className="space-y-4 pt-8">
        {courses.map((course: Course) => (
          <Link
            href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
            key={course.id}
            onClick={onClose}
            className="block"
          >
            <li className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border">
              <Image
                width={64}
                height={64}
                priority
                src={course.image_url}
                alt={course.title}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base text-gray-900 dark:text-white line-clamp-1">
                  {course.title}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {course.description}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
