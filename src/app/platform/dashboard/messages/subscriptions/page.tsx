"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchSubscribers, unsubscribe } from "@/services/newsletterServices";

interface Subscriber {
  id: number;
  email: string;
  name?: string;
  is_active: boolean;
  subscribed_at: string;
}

const Page = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSubscribers = async () => {
    try {
      const data = await fetchSubscribers();
      setSubscribers(data);
    } catch {
      toast.error("Ошибка загрузки подписчиков");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const handleUnsubscribe = async (email: string) => {
    try {
      await unsubscribe(email);
      toast.success(`Пользователь ${email} отписан`);
      await loadSubscribers();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Ошибка при отписке";
      toast.error(message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Подписчики рассылки</h2>

      {loading ? (
        <div className="text-center text-gray-500">Загрузка...</div>
      ) : subscribers.length === 0 ? (
        <div className="text-center text-gray-400">Подписчиков нет</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">
                  Имя
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">
                  Дата
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-700">
                  Статус
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-700">
                  Действие
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscribers.map((s) => (
                <tr key={s.id}>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3">{s.name || "-"}</td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(s.subscribed_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        s.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {s.is_active ? "Активен" : "Отписан"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.is_active ? (
                      <button
                        onClick={() => handleUnsubscribe(s.email)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Отписать
                      </button>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
