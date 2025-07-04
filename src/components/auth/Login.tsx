"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/userService";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", email);
      router.push("/platform/dashboard");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Произошла неизвестная ошибка"
      );
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mb-4 text-left">
          <Link href="/">
            <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              ← Назад
            </button>
          </Link>
        </div>

        <Link href="/">
          <Image
            priority
            width={180}
            height={180}
            alt="Логотип Onay School"
            src="/image/logo/logo-blue-removebg.png"
            className="mx-auto h-28 w-auto"
          />
        </Link>

        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Вход в{" "}
          <span className="text-blue-600 dark:text-blue-400">Onay School</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Добро пожаловать! Пожалуйста, войдите в систему.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Пароль
              </label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Забыли пароль?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-gray-700 hover:bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              Войти
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Нет аккаунта?{" "}
          <Link
            href="/"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
