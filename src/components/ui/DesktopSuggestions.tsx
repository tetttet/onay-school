// components/DesktopSuggestions.tsx
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/services/courseService";

interface DesktopSuggestionsProps {
  courses: Course[];
  onClose: () => void;
}

export default function DesktopSuggestions({ courses, onClose }: DesktopSuggestionsProps) {
  return (
    <ul className="hidden sm:block absolute z-20 mt-2 w-[400px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 max-h-96 overflow-auto p-2 space-y-2 backdrop-blur-md">
      {courses.map((course: Course) => (
        <Link
          href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
          key={course.id}
          onClick={onClose}
          className="block"
        >
          <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
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
              <div className="mt-1 text-xs text-indigo-500 font-medium">
                {course.language} · ${course.price}
              </div>
              {course.students && (
                <div className="text-xs text-gray-400">
                  {course.students.length} students
                </div>
              )}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
