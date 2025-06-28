import React, { useEffect, useState } from "react";
import { fetchUserByEmail, User } from "@/services/userService";
import { fetchCourses, Course } from "@/services/courseService";
import Image from "next/image";

interface MyCourseProps {
  email: string;
  token: string;
}

const MyCourse: React.FC<MyCourseProps> = ({ email, token }) => {
  const [user, setUser] = useState<User | null>(null);
  const [myCourses, setMyCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await fetchUserByEmail(email, token);
        setUser(userData);

        const allCourses = await fetchCourses();
        const enrolledCourses = allCourses.filter((course: Course) =>
          course.students?.includes(userData.id)
        );
        setMyCourses(enrolledCourses);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [email, token]);

  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Курсы - {user?.name}
      </h1>

      {myCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                width={500}
                height={300}
                priority
                src={course.image_url}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                    {course.language}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          У вас нет записанных курсов. Пожалуйста, запишитесь на курс, чтобы
          увидеть его здесь.
        </p>
      )}
    </div>
  );
};

export default MyCourse;
