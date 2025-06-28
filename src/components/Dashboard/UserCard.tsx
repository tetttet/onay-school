"use client";
import React, { useEffect, useState } from "react";
import { fetchUserByEmail, User } from "@/services/userService";
import Image from "next/image";

const UserCard = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    setUserEmail(email);

    if (email && token) {
      fetchUserByEmail(email, token).then((user) => {
        if (user) {
          setUserData(user);
          console.log("User data from API:", user);
        }
      });
    }
  }, []);

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full text-white space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {userData?.image_url ? (
          <Image
            priority
            width={112}
            height={112}
            src={userData.image_url}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center text-3xl font-bold text-white shadow-md">
            {userData?.name?.charAt(0) || "?"}
          </div>
        )}
        <h1 className="text-3xl font-bold">Onay School - LMS</h1>
      </div>

      <div className="text-center">
        <p className="text-xl">
          Добро пожаловать,{" "}
          <span className="font-semibold">{userData?.name || "Guest"}</span>!
        </p>
        <p className="text-sm text-gray-400">
          Позиция: {userData?.role || "N/A"}
        </p>
      </div>

      <div className="border-t border-gray-700 pt-4 space-y-2 text-sm">
        <div>
          <span className="font-medium">Username:</span>{" "}
          {userData?.username || "N/A"}
        </div>
        <div>
          <span className="font-medium">Email:</span> {userEmail || "N/A"}
        </div>
        <div>
          <span className="font-medium">Телефонный номер:</span>{" "}
          {userData?.phone_number || "Not provided"}
        </div>
        <div>
          <span className="font-medium">Возраст:</span>{" "}
          {userData?.age || "Not provided"}
        </div>
        <div>
          <span className="font-medium">Город:</span>{" "}
          {userData?.city || "Not provided"}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
