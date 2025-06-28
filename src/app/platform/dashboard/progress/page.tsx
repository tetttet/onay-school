"use client";
import React, { useState, useEffect } from "react";
import { progressService, CreateProgressDTO } from "@/services/progessService";
import { fetchCourses, Course } from "@/services/courseService";
import { fetchUsers, User, fetchUserByEmail } from "@/services/userService";

const Page = () => {
  // Вся логика для формы
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [user, setUser] = useState<User | null>(null);

  // Для автодополнения по имени пользователя и курсу
  const [userInput, setUserInput] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [courseInput, setCourseInput] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [lesson, setLesson] = useState("");
  const [status, setStatus] = useState("");
  const [completedAt, setCompletedAt] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessages, setSuccessMessages] = useState<string[]>([]);

  useEffect(() => {
    // Загружаем всех пользователей и курсы для подсказок
    fetchUsers().then(setUsers);
    fetchCourses().then(setCourses);
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      fetchUserByEmail(email, token)
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          setError("Failed to fetch user");
        });
    } else {
      setError("User not authorized");
    }
  }, []);

  // Фильтрация подсказок для пользователей и курсов
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(userInput.toLowerCase()) &&
      !selectedUsers.some((su) => su.id === u.id)
  );

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(courseInput.toLowerCase())
  );

  // Добавить пользователя в выбранные
  const addUser = (user: User) => {
    setSelectedUsers((prev) => [...prev, user]);
    setUserInput("");
  };

  // Удалить пользователя из выбранных
  const removeUser = (id: number) => {
    setSelectedUsers((prev) => prev.filter((u) => Number(u.id) !== id));
  };

  // Выбрать курс где Course.tutor_id === user.id
  const selectCourse = (course: Course) => {
    if (user && course.tutor_id === user.id) {
      setSelectedCourse(course);
      setCourseInput(course.title);
    } else {
      setError("You are not authorized to select this course");
    }
  };

  // Отправка формы — создаем прогресс для каждого выбранного пользователя
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) {
      setError("Please select a course");
      return;
    }
    if (selectedUsers.length === 0) {
      setError("Please add at least one user");
      return;
    }
    if (!lesson) {
      setError("Please enter lesson");
      return;
    }
    if (!status) {
      setError("Please select status");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessages([]);

    try {
      const messages: string[] = [];
      for (const user of selectedUsers) {
        const dto: CreateProgressDTO = {
          user_id: Number(user.id),
          course_id: Number(selectedCourse.id),
          lesson,
          status,
          completed_at: completedAt,
        };
        const created = await progressService.createProgress(dto);
        messages.push(
          `Progress created for user ${user.name}: ID ${created.id}`
        );
      }
      setSuccessMessages(messages);
      // Очистить форму после успешной отправки
      setSelectedUsers([]);
      setUserInput("");
      setSelectedCourse(null);
      setCourseInput("");
      setLesson("");
      setStatus("");
      setCompletedAt(null);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to create progress");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Добавить прогресс для пользователей
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Пользователи */}
        <div>
          <label className="block font-medium mb-1">
            Пользователи (add multiple):
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Начните вводить имя..."
            className="w-full border rounded px-3 py-2"
          />
          {userInput && filteredUsers.length > 0 && (
            <ul className="border rounded bg-white max-h-40 overflow-auto mt-1 shadow-lg z-10 relative">
              {filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => addUser(user)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
          {/* Выбранные пользователи */}
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedUsers.map((user) => (
              <div
                key={user.id}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded flex items-center space-x-2"
              >
                <span>{user.name}</span>
                <button
                  type="button"
                  onClick={() => removeUser(Number(user.id))}
                  className="font-bold hover:text-blue-900"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Курсы */}
        <div>
          <label className="block font-medium mb-1">Курсы:</label>
          <input
            type="text"
            value={courseInput}
            onChange={(e) => {
              setCourseInput(e.target.value);
              setSelectedCourse(null);
            }}
            placeholder="Введите названия курса..."
            className="w-full border rounded px-3 py-2"
          />
          {courseInput && filteredCourses.length > 0 && (
            <ul className="border rounded bg-white max-h-40 overflow-auto mt-1 shadow-lg z-10 relative">
              {filteredCourses.map((course) => (
                <li
                  key={course.id}
                  className="px-3 py-2 hover:bg-green-100 cursor-pointer"
                  onClick={() => selectCourse(course)}
                >
                  {course.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Урок */}
        <div>
          <label className="block font-medium mb-1">Названия урока:</label>
          <input
            type="text"
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Статус */}
        <div>
          <label className="block font-medium mb-1">Статус Урока:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">-- Выберите статус урока --</option>
            <option value="in-progress">
                Начинается
            </option>
            <option value="completed">
                Завершено
            </option>
            <option value="not-started">
                Не начато
            </option>
          </select>
        </div>

        {/* Дата завершения */}
        <div>
          <label className="block font-medium mb-1">
            Дата завершения (если есть):
          </label>
          <input
            type="datetime-local"
            value={completedAt ?? ""}
            onChange={(e) => setCompletedAt(e.target.value || null)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Ошибка */}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {/* Кнопка */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Сохранения..." : "Добавить прогресс"}
        </button>
      </form>

      {/* Успешные сообщения */}
      {successMessages.length > 0 && (
        <div className="mt-4 p-4 border border-green-500 bg-green-100 text-green-800 rounded">
          <h3 className="font-semibold mb-2">
            Успешно добавлено прогрессов для пользователей:
          </h3>
          <ul className="list-disc list-inside">
            {successMessages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
