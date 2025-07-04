"use client";

import React, { useState } from "react";
import { subscribe } from "@/services/newsletterServices";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Пожалуйста, введите email");
      return;
    }

    try {
      const response = await subscribe({ email, name });
      toast.success(response.message || "Вы успешно подписались!");
      setEmail("");
      setName("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Ошибка при подписке";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="py-14 container mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 dark:bg-blue-700 md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              Подпишитесь на нашу рассылку
            </h3>
            <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
              Будьте в курсе прогресса разработки, новостей и эксклюзивных
              предложений. Просто введите ваш email и подпишитесь.
            </p>
          </div>

          <div className="mt-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row items-center justify-center bg-white dark:bg-gray-900 rounded-lg p-2"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя (необязательно)"
                className="text-gray-600 dark:text-white bg-transparent w-full p-2 border-b border-gray-300 dark:border-gray-700 sm:border-b-0 sm:border-r outline-none sm:flex-1"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="text-gray-600 dark:text-white bg-transparent w-full p-2 outline-none sm:flex-1"
              />
              <button
                type="submit"
                className="p-2 px-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md"
              >
                Подписаться
              </button>
            </form>

            <p className="mt-3 max-w-lg text-[15px] text-blue-100 dark:text-blue-200 sm:mx-auto text-center">
              Никакого спама. Мы заботимся о безопасности ваших данных.
              Прочитайте нашу{" "}
              <a className="underline" href="/privacy">
                Политику конфиденциальности
              </a>
              .
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
          }}
        />
      </div>
    </section>
  );
};

export default Newsletter;
