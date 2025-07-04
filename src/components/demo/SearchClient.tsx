"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Course, fetchCourses } from "@/services/courseService";
import { CourseCard } from "../cards/CourseCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCourses = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const data = await fetchCourses();
        const filtered = data.filter((course: Course) =>
          course.title.toLowerCase().includes(query.toLowerCase())
        );
        setCourses(filtered);
      } catch (error) {
        console.error("Ошибка при загрузке курсов:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [query]);

  return (
    <main className="p-6 max-w-7xl mx-auto mt-10">
      <div className="text-center mt-8 mb-6">
        <h1 className="text-2xl font-bold mb-4">Результаты поиска</h1>

        {query ? (
          <p className="text-muted-foreground mb-4">
            Поиск по запросу: <strong>{query}</strong>
          </p>
        ) : (
          <p className="text-muted-foreground">Введите запрос для поиска.</p>
        )}
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              progress={100}
              href={`/course/${course.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      ) : query ? (
        <p className="text-muted-foreground">Курсы не найдены.</p>
      ) : null}
    </main>
  );
}
