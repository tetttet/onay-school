"use client";
import React, { useEffect, useState } from "react";
import { fetchAllUsers, User } from "@/services/userService";
import Image from "next/image";

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const getUsers = async () => {
      const data = await fetchAllUsers(token);
      setUsers(data);
    };

    getUsers();
  }, []);

  // Функция для определения цвета для роли
  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500 text-white";
      case "tutor":
        return "bg-blue-500 text-white";
      case "user":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  console.log("Users:", users);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Список пользователей
      </h1>
      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Изображение</th>
            <th className="py-3 px-4 text-left">Имя</th>
            <th className="py-3 px-4 text-left">Логин</th>
            <th className="py-3 px-4 text-left">Роль</th>
            <th className="py-3 px-4 text-left">Город</th>
            <th className="py-3 px-4 text-left">Возраст</th>
            <th className="py-3 px-4 text-left">Номер телефона</th>
            <th className="py-3 px-4 text-left">Электронная почта</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">
                {user.image_url && (
                  <Image
                    src={user.image_url}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
                {!user.image_url && (
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-md font-bold text-white shadow-md">
                    {user.name?.charAt(0) || "?"}
                  </div>
                )}
              </td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.username}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block py-1 px-3 rounded-full ${getRoleColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-3 px-4">{user.city}</td>
              <td className="py-3 px-4">{user.age}</td>
              <td className="py-3 px-4">{user.phone_number}</td>
              <td className="py-3 px-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
