import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "@/services/userService";
import { removeStudentsFromCourse } from "@/services/courseService";
import ErrorModal from "@/components/ui/ErrorModal"; // не забудь путь

const StudentCard = ({
  user,
  courseId,
  onStudentRemoved,
}: {
  user: User;
  courseId: string;
  onStudentRemoved?: (userId: string) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRemove = async () => {
    const confirmed = confirm(`Are you sure you want to remove ${user.name}?`);
    if (!confirmed) return;

    try {
      setLoading(true);
      await removeStudentsFromCourse(courseId, [Number(user.id)]);
      setIsVisible(false);
      setTimeout(() => {
        if (onStudentRemoved) {
          onStudentRemoved(user.id);
        }
      }, 500);
    } catch {
      setError("Failed to remove student. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative min-w-[250px] bg-gray-50 border rounded-lg shadow-sm p-4 flex-shrink-0"
          >
            <button
              onClick={handleRemove}
              disabled={loading}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg font-bold"
              title="Remove student"
            >
              ×
            </button>

            <Image
              src={
                user.image_url ||
                "https://images.unsplash.com/vector-1739804038438-d89cc1634517?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="User Image"
              width={60}
              height={60}
              className="rounded-full object-cover mx-auto mb-2"
            />
            <p className="font-medium text-center text-gray-800">{user.name}</p>
            <p className="text-xs text-center text-gray-500">{user.email}</p>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>City: {user.city}</p>
              <p>Age: {user.age}</p>
              <p>Phone: {user.phone_number}</p>
              <p>Username: {user.username}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <ErrorModal message={error} onClose={() => setError(null)} />}
    </>
  );
};

export default StudentCard;
