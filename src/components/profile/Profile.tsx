"use client";
import React, { useEffect, useState } from "react";
import { fetchUserByEmail, User } from "@/services/userService";
import {
  updateUserAge,
  updateUserCity,
  updateUserImage,
  updateUserPassword,
  updateUserPhoneNumber,
  updateUserUsername,
} from "@/services/userService";
import Toast, { ToastMessage } from "@/components/profile/Toast";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

interface ProfileProps {
  email: string;
  token: string;
}

const Profile: React.FC<ProfileProps> = ({ email, token }) => {
  const [user, setUser] = useState<User | null>(null);
  const [image, setImage] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: "success" | "error", text: string) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleUpdate = async (fn: () => Promise<void>, successMsg: string) => {
    try {
      await fn();
      addToast("success", successMsg);
    } catch (error) {
      console.error(error);
      addToast("error", "Произошла ошибка!");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchedUser = await fetchUserByEmail(email, token);
        setUser(fetchedUser);
        if (fetchedUser) {
          setImage(fetchedUser.image || "");
          setCity(fetchedUser.city || "");
          setPhone(fetchedUser.phoneNumber || "");
          setAge(fetchedUser.age || 0);
          setPassword("");
          setUsername(fetchedUser.username || "");
        }
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
      }
    };

    if (email && token) {
      getUser();
    }
  }, [email, token]);

  if (!user) return <p>Загрузка данных пользователя...</p>;

  return (
    <div className="w-full px-8 py-6 text-sm text-black bg-white rounded-xl shadow-xl mt-8">
      <h1 className="text-xl font-bold mb-6">Редактировать профиль</h1>

      {/* Блок изображения */}
      <div className="flex items-start gap-6 mb-6">
        <div className="w-40 h-40 border rounded-full overflow-hidden">
          {image ? (
            <Image
              width={800}
              height={800}
              priority
              src={image}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Нет изображения
            </div>
          )}
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">
            URL изображения профиля
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL изображения"
            className="border rounded p-2 w-full"
          />
          <button
            onClick={() =>
              handleUpdate(
                () => updateUserImage(user.id, image, token),
                "Изображение обновлено!"
              )
            }
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Обновить изображение
          </button>
        </div>
      </div>

      {/* Поля в одну строку */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Город</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Город"
            className="border rounded p-2 w-full"
          />
          <button
            onClick={() =>
              handleUpdate(
                () => updateUserCity(user.id, city, token),
                "Город обновлён!"
              )
            }
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
          >
            Обновить
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">Возраст</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Возраст"
            className="border rounded p-2 w-full"
          />
          <button
            onClick={() =>
              handleUpdate(
                () => updateUserAge(user.id, age, token),
                "Возраст обновлён!"
              )
            }
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
          >
            Обновить
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">Номер телефона</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Номер телефона"
            className="border rounded p-2 w-full"
          />
          <button
            onClick={() =>
              handleUpdate(
                () => updateUserPhoneNumber(user.id, phone, token),
                "Номер обновлён!"
              )
            }
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
          >
            Обновить
          </button>
        </div>
      </div>

      {/* Отдельные поля */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Имя пользователя</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
          className="border rounded p-2 w-full"
        />
        <button
          onClick={() =>
            handleUpdate(
              () => updateUserUsername(user.id, username, token),
              "Имя пользователя обновлено!"
            )
          }
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Обновить имя
        </button>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Новый пароль"
          className="border rounded p-2 w-full"
        />
        <button
          onClick={() =>
            handleUpdate(
              () => updateUserPassword(user.id, password, token),
              "Пароль обновлён!"
            )
          }
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Обновить пароль
        </button>
      </div>

      <Toast
        messages={toasts}
        onRemove={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />
    </div>
  );
};

export default Profile;
