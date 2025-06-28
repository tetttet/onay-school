"use client";
import Profile from "@/components/profile/Profile";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email") || "";
    const token = localStorage.getItem("token") || "";

    setUserEmail(email);
    setUserToken(token);
  }, []);

  if (!userEmail || !userToken) {
    return <p>Загрузка профиля...</p>;
  }

  return (
    <div>
      <Profile email={userEmail} token={userToken} />
    </div>
  );
};

export default Page;
