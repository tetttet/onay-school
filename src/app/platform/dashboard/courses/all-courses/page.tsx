"use client";
import React, { useEffect, useState } from "react";
import { fetchCourses, Course } from "@/services/courseService";
import { fetchUserById } from "@/services/userService";
import Image from "next/image";

const Page = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [instructors, setInstructors] = useState<Map<string, string>>(
    new Map()
  );

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);

      const tutorNames = new Map<string, string>();
      for (const course of data) {
        if (!tutorNames.has(course.tutor_id)) {
          const user = await fetchUserById(course.tutor_id);
          tutorNames.set(course.tutor_id, user.name);
        }
      }
      setInstructors(tutorNames);
    };

    getCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Все курсы</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Изображение</th>
              <th className="py-3 px-4 text-left">Название</th>
              <th className="py-3 px-4 text-left">Преподаватель</th>
              <th className="py-3 px-4 text-left">Язык</th>
              <th className="py-3 px-4 text-left">Цена</th>
              <th className="py-3 px-4 text-left">Категория</th>
              <th className="py-3 px-4 text-left">Дата создания</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {courses.map((course) => (
              <tr key={course.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">
                  <Image
                    src={course.image_url}
                    alt={course.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </td>
                <td className="py-3 px-4">{course.title}</td>
                <td className="py-3 px-4">
                  {instructors.get(course.tutor_id) || "Loading..."}
                </td>
                <td className="py-3 px-4">{course.language}</td>
                <td className="py-3 px-4">${course.price}</td>
                <td className="py-3 px-4">{course.category.join(", ")}</td>
                <td className="py-3 px-4">
                  {new Date(course.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
