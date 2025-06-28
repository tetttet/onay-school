"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Image from "next/image";
import { Logo } from "./Logo";
import { LogoIcon } from "./LogoIcon";
import { links, TutoringLinks, AdminLinks } from "@/constant/sidebarLinks";
import { fetchUserByEmail, User } from "@/services/userService";

export function SidebarMain() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("email") || "";
      const token = localStorage.getItem("token") || "";

      if (email && token) {
        const fetchUser = async () => {
          const user = await fetchUserByEmail(email, token);
          setUserData(user);
        };

        fetchUser();
      }
    }
  }, []);

  const userLinks = userData?.role === "tutor" ? TutoringLinks : userData?.role === "admin" ? AdminLinks : links;

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {userLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        {userData && (
          <SidebarLink
            link={{
              label: userData.name || "Пользователь",
              href: "/dashboard/profile",
              icon: userData.image_url ? (
                <Image
                  priority
                  width={112}
                  height={112}
                  src={userData.image_url}
                  alt="User"
                  className="w-7 h-7 rounded-full border-4 border-white shadow-md object-cover"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-md font-bold text-white shadow-md">
                  {userData.name?.charAt(0) || "?"}
                </div>
              ),
            }}
          />
        )}
      </SidebarBody>
    </Sidebar>
  );
}
