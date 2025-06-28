import React, { useEffect, useState } from "react";
import { fetchCourseById } from "@/services/courseService";
import { fetchUserById, User } from "@/services/userService";
import Image from "next/image";
import AddStudents from "./AddStudents";
import StudentCard from "../cards/StudentCard";

interface CoursePageProps {
  courseId: string;
}

interface Course {
  title: string;
  description: string;
  price: string;
  image_url: string;
  students: string[];
  language: string;
  category: string[];
  created_at: string;
  updated_at: string;
}

const CoursePage: React.FC<CoursePageProps> = ({ courseId }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const courseData = await fetchCourseById(courseId);
        setCourse(courseData);

        if (courseData.students && courseData.students.length > 0) {
          const users = await Promise.all(
            courseData.students.map((id: string) => fetchUserById(id))
          );
          setStudents(users);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-gray-900">{course.title}</h1>

      <Image
        src={course.image_url || "/placeholder.jpg"}
        alt="Course Image"
        width={800}
        height={800}
        className="w-full h-[400px] rounded-xl object-cover"
      />

      <div className="text-gray-700 space-y-2">
        <p>{course.description}</p>
        <p>
          <strong className="font-semibold">Language:</strong> {course.language}
        </p>
        <p>
          <strong className="font-semibold">Category:</strong>{" "}
          {course.category.join(", ")}
        </p>
        <p>
          <strong className="font-semibold">Price:</strong> ${course.price}
        </p>
        <p>
          <strong className="font-semibold">Created At:</strong>{" "}
          {new Date(course.created_at).toLocaleString()}
        </p>
        <p>
          <strong className="font-semibold">Updated At:</strong>{" "}
          {new Date(course.updated_at).toLocaleString()}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Enrolled Students
        </h2>
        {students.length === 0 ? (
          <p className="text-gray-500 italic">No students enrolled.</p>
        ) : (
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {students.map((user) => (
              <StudentCard
                user={user}
                key={user.id}
                courseId={courseId}
                onStudentRemoved={(removedId) =>
                  setStudents((prev) => prev.filter((s) => s.id !== removedId))
                }
              />
            ))}
          </div>
        )}

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setShowPopup(true)}
        >
          Добавить студентов
        </button>
        {showPopup && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-black hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                ×
              </button>
              <AddStudents courseId={courseId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
