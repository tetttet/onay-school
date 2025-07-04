"use client";
import UserCard from "@/components/Dashboard/UserCard";
import Graph from "@/components/User/Graph";
import { Progress } from "@/services/progessService";
import { fetchUserByEmail, User } from "@/services/userService";
import { useEffect, useState } from "react";
import { progressService } from "@/services/progessService";
import Lesson from "@/components/User/Lesson";
import Pie from "@/components/User/Pie";
import CourseChart from "@/components/User/Course";

const Page = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [userProgress, setUserProgress] = useState<Progress[] | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    if (email && token) {
      fetchUserByEmail(email, token).then((user) => {
        if (user && typeof user.id === "number") {
          setUserData(user);

          progressService.getProgressByUser(user.id).then((progress) => {
            if (progress && progress.length > 0) {
              setUserProgress(progress);
            } else {
              setUserProgress(null);
            }
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 m-4">
      {/* Первая строка */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-4">
        <div className="w-full md:w-auto">
          {userData && <UserCard userData={userData} />}
        </div>

        {userData?.role === "user" && (
          <div className="w-full mt-5 lg:mt-0">
            <Graph userData={userData} userProgress={userProgress ?? []} />
          </div>
        )}
      </div>

      {/* Вторая строка */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-4">
        {userData?.role === "user" && (
          <div className="w-full">
            <Lesson userData={userData} userProgress={userProgress ?? []} />
          </div>
        )}

        {userData?.role === "user" && (
          <div className="w-full">
            <Pie userData={userData} userProgress={userProgress ?? []} />
          </div>
        )}
        {userData?.role === "user" && (
          <div className="w-full">
            <CourseChart userData={userData}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
