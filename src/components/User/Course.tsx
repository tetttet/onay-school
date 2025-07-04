"use client";

import { fetchUserByEmail, User } from "@/services/userService";
import { Course, fetchCourses } from "@/services/courseService";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CourseChart = ({ userData }: { userData: User }) => {
  const [user, setUser] = useState<User | null>(null);
  const [myCourses, setMyCourses] = useState<Course[]>([]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";

  useEffect(() => {
    const loadData = async () => {
      try {
        const userInfo = await fetchUserByEmail(userData.email, token);
        setUser(userInfo);

        const allCourses = await fetchCourses();
        const enrolledCourses = allCourses.filter((course: Course) =>
          course.students?.includes(userInfo.id)
        );
        setMyCourses(enrolledCourses);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [userData.email, token]);

  return (
    <div className="px-6 py-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        Курсы студента – {user?.name}
      </h1>

      {myCourses.length > 0 ? (
        <div className="flex flex-col gap-6">
          {myCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Картинка слева */}
              <div className="w-full md:w-60 h-40 md:h-auto relative">
                <Image
                  src={course.image_url}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="md:rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-none"
                  priority
                />
              </div>

              {/* Текст справа */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 min-h-[60px]">
                    {course.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-md">
                    {course.language}
                  </span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">
                    {course.price === 0 ? "Бесплатно" : `₸${course.price}`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          У вас нет записанных курсов. Пожалуйста, выберите курс, чтобы он
          появился здесь.
        </p>
      )}
    </div>
  );
};

export default CourseChart;
