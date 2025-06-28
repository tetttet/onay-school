import React from "react";
import UserCard from "./UserCard";

const DashboardContent = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-200 dark:from-gray-900 dark:to-black min-h-screen flex flex-col px-4 py-8">
      <UserCard />
    </div>
  );
};

export default DashboardContent;
