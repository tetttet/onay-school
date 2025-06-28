"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { valutes } from "@/constant/courses";
import { Course } from "@/services/courseService";
import { fetchCourses } from "@/services/courseService";
import { useEffect, useState } from "react";
import { fetchUserById, User } from "@/services/userService";

export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [tutor, setTutor] = useState<User | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, []);

  const decodedSlug = decodeURIComponent(typeof slug === "string" ? slug : "");

  const matchedCourse = courses.find(
    (course) => course.title.toLowerCase().replace(/\s+/g, "-") === decodedSlug
  );

  const tutor_id = matchedCourse?.tutor_id;
  useEffect(() => {
    const fetchTutor = async () => {
      if (!tutor_id) {
        console.warn("Tutor ID is undefined, skipping fetch.");
        return;
      }
      try {
        const data = await fetchUserById(tutor_id);
        setTutor(data);
      } catch (error) {
        console.error("Error fetching tutor:", error);
      }
    };
    fetchTutor();
  }, [tutor_id]);

  if (!matchedCourse) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className=" bg-opacity-80 backdrop-blur-md rounded-xl px-8 py-6 flex items-center space-x-4">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          <span className="text-gray-700 font-semibold text-lg select-none">
            Грузится...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 mt-10 lg:mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <nav className="text-sm text-gray-500 space-x-1">
            <Link href="/" className="hover:underline">
              Главная
            </Link>
            &gt;
            <Link href="/" className="hover:underline">
              {" "}
              Курсы
            </Link>
            &gt;
            <span className="text-gray-700 font-medium">
              {" "}
              {matchedCourse.title}
            </span>
          </nav>

          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
            {matchedCourse.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            {matchedCourse.description}
          </p>

          <div className="flex items-center flex-wrap gap-4">
            {(matchedCourse.category?.length
              ? matchedCourse.category
              : ["Uncategorized"]
            ).map((cat, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-white/10 text-sm font-medium px-3 py-1 rounded-full text-gray-800 dark:text-white"
              >
                {cat}
              </span>
            ))}
            <div className="flex items-center text-yellow-500 text-sm">
              <Star className="w-4 h-4 mr-1" />
              <span>5.0</span>
            </div>
            <span className="text-sm text-gray-500">
              {matchedCourse.students?.length} students
            </span>
          </div>

          <div className="flex items-center space-x-3 mt-4">
            {tutor?.image_url && (
              <Image
                src={tutor?.image_url}
                alt={tutor?.name}
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover"
              />
            )}
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <span>Created by </span>
              <Link href="#" className="text-blue-500 hover:underline">
                {tutor?.name}
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-green-500">✔</span> Последнее обновление:{" "}
            <span>
              {new Date(matchedCourse.updated_at).toLocaleDateString("ru-RU")}
            </span>{" "}
            | <span className="text-yellow-500">{matchedCourse.language}</span>
          </div>

          <div className="text-3xl font-semibold text-gray-900 dark:text-white">
            {valutes}
            {matchedCourse.price}
          </div>

          <div className="flex space-x-4 mt-6">
            <button className="bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition">
              Подписаться на курс
            </button>
            <button className="bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white px-5 py-3 rounded-lg hover:opacity-90 transition">
              Узнать больше
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          <div
            className="w-full h-[800px] bg-cover bg-center"
            style={{ backgroundImage: `url(${matchedCourse.image_url})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
