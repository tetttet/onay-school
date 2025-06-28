"use client";
import React, { useEffect, useState } from "react";
import { addStudentsToCourse } from "@/services/courseService";
import { fetchAllUsers } from "@/services/userService";

interface AddStudentsProps {
  courseId: string;
}

const AddStudents: React.FC<AddStudentsProps> = ({ courseId }) => {
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
  const [newStudent, setNewStudent] = useState({ id: "", name: "" });
  const [allUsers, setAllUsers] = useState<{ id: string; name: string }[]>([]);
  const [searchResults, setSearchResults] = useState<
    { id: string; name: string }[]
  >([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await fetchAllUsers(localStorage.getItem("token") || "");
        setAllUsers(users);
      } catch (error) {
        console.error("Ошибка загрузки пользователей", error);
      }
    };

    loadUsers();
  }, []);

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedStudent = { ...newStudent, [name]: value };
    setNewStudent(updatedStudent);

    // Поиск по имени (можно сделать insensitive)
    if (name === "name") {
      const filtered = allUsers.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5)); // максимум 5 подсказок
    }
  };

  const handleSelectSuggestion = (user: { id: string; name: string }) => {
    setNewStudent({ id: user.id, name: user.name });
    setSearchResults([]); // очистка подсказок
  };

  const handleAddStudent = () => {
    if (newStudent.id && newStudent.name) {
      setStudents([...students, newStudent]);
      setNewStudent({ id: "", name: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (students.length === 0) {
      setMessage("❌ Нет студентов для добавления");
      return;
    }

    try {
      const studentIds = students.map((student) => Number(student.id));
      await addStudentsToCourse(courseId, studentIds);

      setMessage("✅ Успешно добавлены студенты");
      setStudents([]);
    } catch (error) {
      console.error(error);
      setMessage("❌ Не удалось добавить студентов");
    }
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-10 text-black relative">
      <h2 className="text-xl font-semibold mb-4">Добавить студентов в курс</h2>

      <div className="space-y-2 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Имя студента"
          value={newStudent.name}
          onChange={handleStudentChange}
          className="w-full border p-2 rounded"
        />
        {searchResults.length > 0 && (
          <div className="absolute w-full z-10 bg-white border border-gray-300 shadow max-h-60 overflow-y-scroll text-sm">
            <table className="w-full">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="border px-2 py-1 text-left">ID</th>
                  <th className="border px-2 py-1 text-left">Имя</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((user) => (
                  <tr
                    key={user.id}
                    className="cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectSuggestion(user)}
                  >
                    <td className="border px-2 py-1">{user.id}</td>
                    <td className="border px-2 py-1">{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <input
          type="text"
          name="id"
          placeholder="ID студента"
          value={newStudent.id}
          onChange={handleStudentChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="button"
          onClick={handleAddStudent}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Добавить студента
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-sm">Список студентов:</h3>
          <ul>
            {students.map((student, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {student.name} (ID: {student.id})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setStudents(students.filter((_, i) => i !== index))
                  }
                  className="text-red-500"
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Отправить студентов
        </button>

        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default AddStudents;
