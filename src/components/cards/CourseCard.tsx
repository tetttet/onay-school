"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Loader } from "@/components/ui/loader";
import { CourseProgress } from "@/components/CourseProgress";
import { Course } from "@/services/courseService";
import { fetchUserById, User } from "@/services/userService";
import { useEffect, useState } from "react";
import { valutes } from "@/constant/courses";

interface CourseCardProps {
  course: Course;
  progress?: number;
  href: string;
}

export function CourseCard({ course, progress, href }: CourseCardProps) {
  const [tutor, setTutor] = useState<User | null>(null);
  const tutor_id = course.tutor_id;

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const data = await fetchUserById(tutor_id);
        setTutor(data);
      } catch (error) {
        console.error("Error fetching tutor:", error);
      }
    };
    fetchTutor();
  }, [tutor_id]);

  return (
    <Link
      href={href}
      prefetch={false}
      className="group hover:no-underline flex"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] border border-border flex flex-col flex-1">
        <div className="relative h-52 w-full overflow-hidden">
          {course.image_url ? (
            <Image
              src={course.image_url || ""}
              alt={course.title || "Course Image"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size="lg" />
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-[8px]">
              {(course.category?.length
                ? course.category
                : ["Uncategorized"]
              ).map((cat, index) => (
                <span
                  key={index}
                  className="text-sm font-medium px-3 py-1 bg-black/50 text-white rounded-full backdrop-blur-xs"
                >
                  {cat}
                </span>
              ))}
            </div>
            {course.price ? (
              <span className="text-white font-bold px-3 py-1 bg-black/50 dark:bg-white/20 rounded-full backdrop-blur-xs">
                {course.price === 0
                  ? "Free"
                  : `${valutes}${course.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}`}
              </span>
            ) : (
              <span className="text-white font-bold px-3 py-1 bg-black/50 dark:bg-white/20 rounded-full backdrop-blur-xs">
                Price not available
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
            {course.description}
          </p>
          <div className="space-y-4 mt-auto">
            {tutor?.name && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {tutor.image_url ? (
                    <div className="relative h-8 w-8 mr-2">
                      <Image
                        src={tutor.image_url || ""}
                        alt={tutor.name || "Instructor"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-8 w-8 mr-2 rounded-full bg-muted flex items-center justify-center">
                      <Loader size="sm" />
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">
                    от {tutor.name}
                  </span>
                </div>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            {typeof progress === "number" && (
              <CourseProgress
                progress={progress}
                variant="default"
                size="sm"
                label="Course Progress"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
