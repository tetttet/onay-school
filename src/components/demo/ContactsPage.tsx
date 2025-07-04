"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchCourses, Course } from "@/services/courseService";
import { sendContactForm } from "@/services/mailService";

const ContactsPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data.slice(0, 7)); // показываем только первые 7 курсов
    };
    getCourses();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactForm(formData);
      alert("Форма успешно отправлена!");
    } catch (error) {
      alert("Ошибка при отправке формы.");
      console.error(error);
    }
  };

  return (
    <div className="flex overflow-hidden bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-200">
      <div className="flex-1 hidden lg:block">
        <Image
          alt="Свяжитесь с нами"
          width={3387}
          height={1000}
          src="https://images.unsplash.com/photo-1678436747979-8d71ebd7c5a5?w=900&auto=format&fit=crop&q=60"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4">
          <div>
            <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
              Свяжитесь с нами
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Мы рады услышать вас! Пожалуйста, заполните форму ниже.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 mt-12 lg:pb-12">
            <div>
              <label className="font-medium">Полное имя</label>
              <input
                name="name"
                type="text"
                required
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-white shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Электронная почта</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-white shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Номер телефона</label>
              <input
                name="phone"
                type="tel"
                placeholder="+7 (700) 000-0000"
                required
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-white shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Интересующие курсы</label>
              <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                {courses.map((course, idx) => (
                  <li key={course.id} className="flex gap-x-3 text-sm">
                    <div>
                      <input
                        id={`course-${idx}`}
                        type="checkbox"
                        onChange={() => handleCheckbox(course.title)}
                        className="checkbox-item peer hidden"
                      />
                      <label
                        htmlFor={`course-${idx}`}
                        className="relative flex w-5 h-5 bg-white dark:bg-gray-700 peer-checked:bg-indigo-600 rounded-md border border-gray-300 dark:border-gray-600 ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                    </div>
                    <label
                      htmlFor={`course-${idx}`}
                      className="cursor-pointer dark:text-gray-300"
                    >
                      {course.title}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="font-medium">Сообщение</label>
              <textarea
                name="message"
                required
                onChange={handleChange}
                className="w-full mt-2 h-36 px-3 py-2 resize-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none border border-gray-300 dark:border-gray-700 focus:border-gray-800 dark:focus:border-white shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#337af7] hover:bg-blue-700 active:bg-[#337af7] dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:active:bg-indigo-700 rounded-lg duration-150">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
