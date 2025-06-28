"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchUserByEmail, User } from "@/services/userService";
import { fetchCoursesByTutorId, Course } from "@/services/courseService";

const SearchCourse = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("userData", userData);

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      if (email && token) {
        try {
          const user = await fetchUserByEmail(email, token);
          setUserData(user);

          const courses = await fetchCoursesByTutorId(user.id);
          setCourses(courses);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Неизвестная ошибка");
        } finally {
          setLoading(false);
        }
      } else {
        setError("Пользователь не авторизован");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6">Загрузка...</div>;
  if (error) return <div className="p-6 text-red-600">Ошибка: {error}</div>;

  return (
    <div className="w-full ml-0 lg:ml-5 p-6 bg-white shadow-lg rounded-xl text-black space-y-4">
      <h2 className="text-xl font-bold">Список курсов</h2>

      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b px-6 py-4 text-left font-semibold">
              Изображение
            </th>
            <th className="border-b px-6 py-4 text-left font-semibold">
              Название
            </th>
            <th className="border-b px-6 py-4 text-left font-semibold">
              Описание
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4">
                <Link
                  href={`/platform/dashboard/courses/${course.id}`}
                  className="flex items-center"
                >
                  <Image
                    width={64}
                    height={64}
                    src={course.image_url}
                    alt={course.title}
                    className="w-20 h-20 object-cover rounded shadow"
                  />
                </Link>
              </td>
              <td className="px-6 py-4 text-lg text-gray-900">
                <Link
                  href={`/platform/dashboard/courses/${course.id}`}
                  className="hover:underline"
                >
                  {course.title}
                </Link>
              </td>
              <td className="px-6 py-4 text-gray-600">
                <Link
                  href={`/platform/dashboard/courses/${course.id}`}
                  className="hover:underline"
                >
                  {course.description}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchCourse;
