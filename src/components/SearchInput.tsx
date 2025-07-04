"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Course, fetchCourses } from "@/services/courseService";
import Image from "next/image";
import Link from "next/link";

export function SearchInput() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    async function loadCourses() {
      const allCourses = await fetchCourses();
      setCourses(allCourses);
    }
    loadCourses();
  }, []);

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length === 0) {
      setFilteredCourses([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );

    setFilteredCourses(filtered.slice(0, 5)); // Показываем не больше 5
    setShowSuggestions(true);
  }, [searchQuery, courses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full flex-1 max-w-[400px]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Поиск курсов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            if (filteredCourses.length > 0) setShowSuggestions(true);
          }}
          className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </form>

      {showSuggestions && filteredCourses.length > 0 && (
        <ul className="absolute z-10 mt-2 w-[400px] rounded-xl bg-white shadow-2xl dark:bg-gray-800 max-h-96 overflow-auto p-2">
          {filteredCourses.map((course) => (
            <Link
              href={`/course/${course.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={course.id}
              onClick={() => setShowSuggestions(false)}
              className="block"
            >
              <li
                key={course.id}
                className="cursor-pointer px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-4 rounded-lg transition"
              >
                <Image
                  width={64}
                  height={64}
                  priority
                  src={course.image_url}
                  alt={course.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold text-base">{course.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {course.description}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
