"use client";
import CoursePage from "@/components/Courses/CoursePage";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();

  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-100">
      {id ? <CoursePage courseId={String(id)} /> : <p>Course ID is missing</p>}
    </div>
  );
};

export default Page;
