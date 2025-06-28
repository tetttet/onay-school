import AddCourseForm from "@/components/Courses/AddCourseForm";
import SearchCourse from "@/components/Courses/SearchCourse";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-3 flex flex-col md:flex-row mb-10">
        <div className="flex-1 mb-4 md:mb-0  h-full overflow-y-auto">
          <AddCourseForm />
        </div>
        <div className="flex-1  h-full overflow-y-auto">
          <SearchCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
