"use client";

import { useEffect, useState } from "react";
import { fetchCoursesByTutorId } from "@/services/courseService";
import { User } from "@/services/userService";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  students?: number[];
  image_url: string;
  language: string;
  price: number;
  category: string[];
  created_at: string;
  updated_at: string;
}

const ProfileCourse: React.FC<{ user: User }> = ({ user }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCoursesByTutorId(Number(user.id));
        setCourses(data);
      } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
      }
    };

    if (user?.id) {
      loadCourses();
    }
  }, [user?.id]);

  return (
    <div className="mt-8 space-y-6">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="block"
        >
          <motion.div
            key={course.id}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[90$] h-56 md:w-64 md:h-48 mt-4 md:mt-6 mx-4 md:ml-6 rounded-xl overflow-hidden">
              <Image
                src={course.image_url}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <span>🗣 Язык: {course.language}</span>
                <span>💸 Цена: {course.price} ₸</span>
                <span>📚 Категория: {course.category.join(", ")}</span>
                <span>👥 Студентов: {course.students?.length ?? 0}</span>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileCourse;
