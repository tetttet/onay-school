"use client";
import { CourseCard } from "@/components/cards/CourseCard";
import { WobbleCardDemo } from "@/components/demo/WobbleCardDemo";
import { InfiniteMovingCardsDemo } from "@/components/demo/InfiniteMovingCardsDemo";
import { Course, fetchCourses } from "@/services/courseService";
import { useEffect, useState } from "react";
import HeroHome from "@/components/demo/HeroHome";
import Faq from "@/components/ui/faq";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroHome />
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Наши популярные курсы
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
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
      </div>
      <WobbleCardDemo />
      <Faq />
      <InfiniteMovingCardsDemo />
    </div>
  );
}
