import { API_URL } from "@/constant/url";

export interface NewsletterSubscription {
  email: string;
  name?: string;
}

// Подписка
export async function subscribe(data: NewsletterSubscription) {
  const response = await fetch(`${API_URL}/newsletter/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Ошибка подписки");
  }

  return response.json();
}

// Отписка
export async function unsubscribe(email: string) {
  const response = await fetch(`${API_URL}/newsletter/unsubscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Ошибка отписки");
  }

  return response.json();
}

// Получение всех подписчиков (например, для админки)
export async function fetchSubscribers() {
  const response = await fetch(`${API_URL}/newsletter/subscribers`);

  if (!response.ok) {
    throw new Error("Не удалось загрузить список подписчиков");
  }

  return response.json();
}

// deactivate subscription
export async function deactivateSubscription(email: string) {
  const response = await fetch(`${API_URL}/newsletter/deactivate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Ошибка деактивации подписки");
  }

  return response.json();
}
