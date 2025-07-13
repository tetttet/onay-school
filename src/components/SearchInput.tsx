"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Course, fetchCourses } from "@/services/courseService";
import MobileSuggestions from "./ui/MobileSuggestions";
import DesktopSuggestions from "./ui/DesktopSuggestions";

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
        <>
          <MobileSuggestions
            courses={filteredCourses}
            onClose={() => setShowSuggestions(false)}
          />
          <DesktopSuggestions
            courses={filteredCourses}
            onClose={() => setShowSuggestions(false)}
          />
        </>
      )}
    </div>
  );
}
