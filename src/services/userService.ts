const API_URL = "https://express-onay-server.vercel.app/api";
// const API_URL = "http://localhost:8080/api";

export interface User {
  id: string;
  name: string;
  username: string;
  image_url: string;
  city: string;
  age: number;
  phone_number: string;
  email: string;
  role: string;
}
export interface LoginResponse {
  token: string;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Неверный логин или пароль");
  }

  const data = await res.json();
  return data;
}

export const fetchUserByEmail = async (email: string, token: string) => {
  try {
    const res = await fetch(`${API_URL}/users/email/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/users/${id}`);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};

export const addTutor = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users/tutor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании преподавателя");
    }

    const newTutor = await response.json();
    return newTutor;
  } catch (error) {
    console.error("Ошибка при добавлении преподавателя:", error);
    throw error;
  }
};

export const addUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании преподавателя");
    }

    const newTutor = await response.json();
    return newTutor;
  } catch (error) {
    console.error("Ошибка при добавлении преподавателя:", error);
    throw error;
  }
};

export const addAdmin = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/users/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании преподавателя");
    }

    const newTutor = await response.json();
    return newTutor;
  } catch (error) {
    console.error("Ошибка при добавлении преподавателя:", error);
    throw error;
  }
};

export const isTutor = async (email: string, token: string) => {
  try {
    const res = await fetch(`${API_URL}/users/email/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data.role === "tutor";
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return false;
  }
};

export const fetchAllUsers = async (token: string) => {
  try {
    const res = await fetch(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return null;
  }
};

export const updateUserImage = async (
  id: string,
  image_url: string,
  token: string
) => {
  try {
    const res = await fetch(`${API_URL}/users/image/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image: image_url }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update image:", error);
    return null;
  }
};

export const updateUserCity = async (
  id: string,
  city: string,
  token: string
) => {
  try {
    const res = await fetch(`${API_URL}/users/city/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ city }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update city:", error);
    return null;
  }
};

export const updateUserPhoneNumber = async (
  id: string,
  phoneNumber: string,
  token: string
) => {
  try {
    const res = await fetch(`${API_URL}/users/phone/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update phone number:", error);
    return null;
  }
};

export const updateUserAge = async (id: string, age: number, token: string) => {
  try {
    const res = await fetch(`${API_URL}/users/age/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ age }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update age:", error);
    return null;
  }
};

export const updateUserPassword = async (
  id: string,
  password: string,
  token: string
) => {
  try {
    const res = await fetch(`${API_URL}/users/password/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update password:", error);
    return null;
  }
};

export const updateUserUsername = async (
  id: string,
  username: string,
  token: string
) => {
  try {
    const res = await fetch(`${API_URL}/users/username/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to update username:", error);
    return null;
  }
};
