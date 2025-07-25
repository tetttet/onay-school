"use client";
import { CourseCard } from "@/components/cards/CourseCard";
import RangeSlider from "@/components/ui/range-slider";
import Search from "@/components/ui/search";
import { fetchCourses } from "@/services/courseService";
import React, { useEffect, useState } from "react";

const MIN = 0;
const MAX = 20000;

const page = () => {
  const [courses, setCourses] = useState<
    { title: string; description: string; price: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([MIN, MAX]);

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
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      course.price >= priceRange[0] &&
      course.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto px-4 mt-36">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
        <Search search={search} setSearch={setSearch} />

        <RangeSlider
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          MIN={MIN}
          MAX={MAX}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            progress={100}
            href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
