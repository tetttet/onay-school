const API_URL = "https://express-onay-server.vercel.app/api";
// const API_URL = "http://localhost:8080/api";


//Course
export interface Course {
  id: string;
  tutor_id: string;
  title: string;
  description: string;
  students?: number[];
  image_url: string;
  language: string;
  price: number;
  category: string[];
  created_at: string;
  updated_at: string;
}

// take course by id
export const fetchCourseById = async (courseId: string) => {
  try {
    const res = await fetch(`${API_URL}/courses/${courseId}`);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch course:", error);
    return null;
  }
};

export const addStudentsToCourse = async (
  courseId: string,
  studentIds: number[]
) => {
  const response = await fetch(`${API_URL}/courses/${courseId}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ students: studentIds }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при отправке данных");
  }

  return response.json();
};

export const fetchCourses = async () => {
  try {
    const res = await fetch(`${API_URL}/courses`);

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

export const removeStudentsFromCourse = async (
  courseId: string,
  students: number[]
) => {
  try {
    console.log("Removing students:", students, courseId);
    const response = await fetch(
      `${API_URL}/courses/${courseId}/remove-students`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ students }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to remove students");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error removing students from course:", error);
    throw error;
  }
};

export const fetchCoursesByTutorId = async (
  tutorId: number
): Promise<Course[]> => {
  const response = await fetch(`${API_URL}/courses/tutor/${tutorId}`);

  if (!response.ok) {
    throw new Error("Ошибка при загрузке курсов");
  }

  const data = await response.json();
  return data;
};
