const API_URL = "https://express-onay-server.vercel.app/api";
// const API_URL = "http://localhost:8080/api";

export interface Progress {
  id: number;
  user_id: number;
  course_id: number;
  lesson: string;
  status: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateProgressDTO {
  user_id: number;
  course_id: number;
  lesson: string;
  status: string;
  completed_at?: string | null;
}

export interface UpdateProgressDTO {
  status: string;
  completed_at?: string | null;
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(
      error?.message || `Request failed with status ${res.status}`
    );
  }

  return res.json();
}

export const progressService = {
  async createProgress(data: CreateProgressDTO): Promise<Progress> {
    return request<Progress>(`${API_URL}/progress`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async getProgress(): Promise<Progress[]> {
    return request<Progress[]>(`${API_URL}/progress`);
  },

  async getProgressByUser(user_id: number): Promise<Progress[]> {
    return request<Progress[]>(`${API_URL}/progress/user/${user_id}`);
  },

  async getUsersByLesson(lesson: string): Promise<number[]> {
    return request<number[]>(
      `${API_URL}/progress/lesson/${encodeURIComponent(lesson)}/users`
    );
  },

  async updateProgressStatus(
    id: number,
    data: UpdateProgressDTO
  ): Promise<Progress> {
    return request<Progress>(`${API_URL}/progress/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  async deleteProgress(
    id: number
  ): Promise<{ message: string; deleted: Progress }> {
    return request<{ message: string; deleted: Progress }>(
      `${API_URL}/progress/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};
