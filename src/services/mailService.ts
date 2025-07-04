import { API_URL } from "@/constant/url";
// services/mailServices.ts

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  services: string[];
}

export interface ContactMessage extends ContactFormData {
  id: number;
  status: string;
  reviewed_by?: number;
  reviewed_at?: string;
  ip_address?: string;
  user_agent?: string;
  is_spam: boolean;
  created_at: string;
}

/**
 * Отправка формы обратной связи на сервер
 */
export const sendContactForm = async (
  formData: ContactFormData
): Promise<void> => {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Ошибка при отправке формы");
  }
};

/**
 * Получить все контактные сообщения
 */
export const getAllMessages = async (): Promise<ContactMessage[]> => {
  const response = await fetch(`${API_URL}/contact`);

  if (!response.ok) {
    throw new Error("Не удалось загрузить сообщения");
  }

  return response.json();
};

/**
 * Получить конкретное сообщение по ID
 */
export const getMessageById = async (id: number): Promise<ContactMessage> => {
  const response = await fetch(`${API_URL}/contact/${id}`);

  if (!response.ok) {
    throw new Error("Сообщение не найдено");
  }

  return response.json();
};

/**
 * Обновить статус и ревью для сообщения
 */
export const reviewMessage = async (
  id: number,
  status: string,
  reviewed_by: number
): Promise<ContactMessage> => {
  const response = await fetch(`${API_URL}/contact/${id}/review`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status, reviewed_by }),
  });

  if (!response.ok) {
    throw new Error("Не удалось обновить статус сообщения");
  }

  return response.json();
};

/**
 * Пометить сообщение как спам
 */
export const markAsSpam = async (
  id: number,
  is_spam = true
): Promise<ContactMessage> => {
  const response = await fetch(`${API_URL}/contact/${id}/spam`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ is_spam }),
  });

  if (!response.ok) {
    throw new Error("Не удалось обновить флаг спама");
  }

  return response.json();
};
