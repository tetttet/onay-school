import React from "react";
import AddTutor from "@/components/auth/AddTutor";
import AddUser from "@/components/auth/AddUser";
import AddAdmin from "@/components/auth/AddAdmin";

const Page = () => {
  return (
    <div className="h-screen overflow-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 ml-2">
        <AddTutor />
        <AddUser />
        <AddAdmin />
      </div>
    </div>
  );
};

export default Page;
