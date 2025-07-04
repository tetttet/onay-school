"use client";
import { API_URL } from "@/constant/url";
import { fetchUserByEmail } from "@/services/userService";
import React, { useEffect, useState } from "react";

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    students: "",
    image_url: "",
    language: "",
    price: "",
    category: "",
  });
  const [userId, setUserId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchUserByEmail(
      localStorage.getItem("email") || "",
      localStorage.getItem("token") || ""
    ).then((user) => {
      if (user) {
        setUserId(user.id);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const studentsArray = formData.students
        .split(",")
        .map((s) => parseInt(s.trim()))
        .filter((n) => !isNaN(n));

      const categoryArray = formData.category
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const courseData = {
        ...formData,
        tutor_id: userId,
        price: parseFloat(formData.price),
        students: studentsArray,
        category: categoryArray,
      };

      const res = await fetch(`${API_URL}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Курс создан!");
        setFormData({
          title: "",
          description: "",
          students: "",
          image_url: "",
          language: "",
          price: "",
          category: "",
        });
      } else {
        alert(data.error || "Ошибка при создании курса");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка при обработке данных");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white shadow-lg rounded-xl space-y-4 text-black"
    >
      <h2 className="text-2xl font-bold text-center">Создание курса</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="input col-span-1 md:col-span-2"
        />
        <input
          name="students"
          value={formData.students}
          onChange={handleChange}
          placeholder="2, 3, 7"
          className="input"
        />
        <input
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          placeholder="Image URL"
          className="input"
        />
        <input
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="Language"
          className="input"
        />
        <div className="flex gap-4">
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="input flex-1"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category (e.g., Computer, Software)"
            className="input flex-1"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Создать курс
      </button>
    </form>
  );
};

export default AddCourseForm;
