"use client";
import React, { useEffect, useState } from "react";
import { progressService, Progress } from "@/services/progessService";
import { fetchUserByEmail, fetchUserById } from "@/services/userService";
import { Course, fetchCoursesByTutorId } from "@/services/courseService";

interface User {
  id: number;
  name: string;
  email: string;
}

const Page = () => {
  const [progressList, setProgressList] = useState<Progress[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({}); // id -> User
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      fetchUserByEmail(email, token)
        .then(async (user) => {
          if (user && typeof user.id === "number") {
            try {
              const tutorCourses = await fetchCoursesByTutorId(user.id);
              setCourses(tutorCourses);
              const progressData = await progressService.getProgress();
              setProgressList(progressData);

              const userIds = Array.from(
                new Set(progressData.map((p) => p.user_id))
              );
              const usersMap: Record<number, User> = {};
              await Promise.all(
                userIds.map(async (id) => {
                  try {
                    const u = await fetchUserById(String(id));
                    if (u) usersMap[id] = u;
                  } catch {
                    console.error(
                      `Ошибка при загрузке пользователя с ID ${id}`
                    );
                  }
                })
              );
              setUsers(usersMap);

              setLoading(false);
            } catch (err) {
              console.error("Ошибка при загрузке курсов или прогресса", err);
              setError("Ошибка при загрузке данных");
              setLoading(false);
            }
          } else {
            setError("Пользователь не найден");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          setError("Ошибка при загрузке данных пользователя");
          setLoading(false);
        });
    } else {
      setError("Пользователь не авторизован");
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="p-4">Загрузка...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  const filteredProgressList = progressList.filter((progress) =>
    courses.some((course) => Number(course.id) === Number(progress.course_id))
  );

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Пользователь
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Курс</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Урок</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Статус
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Завершено
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Создано
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Обновлено
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProgressList.map(
            ({
              id,
              user_id,
              course_id,
              lesson,
              status,
              completed_at,
              created_at,
              updated_at,
            }) => (
              <tr key={id} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {users[user_id]?.name ?? `Пользователь ${user_id}`}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {courses.find((c) => Number(c.id) === Number(course_id))
                    ?.title ?? `Курс ${course_id}`}
                </td>
                <td className="border border-gray-300 px-4 py-2">{lesson}</td>
                <td className="border border-gray-300 px-4 py-2">{status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatDate(completed_at)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatDate(created_at)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatDate(updated_at)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
