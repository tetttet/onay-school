"use client";
import React, { useEffect, useState } from "react";
import {
  ContactMessage,
  getAllMessages,
  reviewMessage,
  markAsSpam,
} from "@/services/mailService";

const statusOptions = [
  "Ожидания",
  "Прочитано",
  "Ответ отправлен",
  "Принято",
  "Отклонено",
];

const Page = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const data = await getAllMessages();
      setMessages(data);
    } catch (error) {
      console.error("Ошибка загрузки сообщений:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const updated = await reviewMessage(id, newStatus, 1); // 1 — ID админа-заглушка
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, status: updated.status } : msg
        )
      );
    } catch (error) {
      console.error("Ошибка изменения статуса:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ожидания":
        return "bg-gray-100 text-gray-700";
      case "Прочитано":
        return "bg-blue-100 text-blue-700";
      case "Ответ отправлен":
        return "bg-green-100 text-green-700";
      case "Принято":
        return "bg-emerald-100 text-emerald-700";
      case "Отклонено":
        return "bg-red-100 text-red-700";
      default:
        return "bg-white text-black";
    }
  };

  const handleSpamToggle = async (id: number) => {
    try {
      const updated = await markAsSpam(id);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, is_spam: updated.is_spam } : msg
        )
      );
    } catch (error) {
      console.error("Ошибка при пометке как спам:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Контактные сообщения</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm table-auto">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Имя</th>
                <th className="p-3">Email</th>
                <th className="p-3">Сообщение</th>
                <th className="p-3">Статус</th>
                <th className="p-3">Дата</th>
                <th className="p-3">Спам</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{msg.name}</td>
                  <td className="p-3">{msg.email}</td>
                  <td className="p-3 max-w-xs truncate">{msg.message}</td>
                  <td className="p-3">
                    <select
                      value={msg.status}
                      onChange={(e) =>
                        handleStatusChange(msg.id, e.target.value)
                      }
                      className={`border rounded px-2 py-1 text-sm transition ${getStatusColor(
                        msg.status
                      )}`}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-3">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleSpamToggle(msg.id)}
                      className={`text-xs px-2 py-1 rounded transition ${
                        msg.is_spam
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      }`}
                    >
                      {msg.is_spam ? "Удалить спам" : "Спам?"}
                    </button>
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
