"use client";

import { User } from "@/services/userService";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, UserCircle2, MessageCircle } from "lucide-react";

const Profile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 shadow-sm rounded-3xl p-8 space-y-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {user?.image_url ? (
          <Image
            src={user?.image_url}
            alt={user?.name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-300 border-4 border-blue-500">
            {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            @{user.username}
          </p>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800 dark:text-white">
            {user.role === "tutor" ? "Преподаватель" : user.role}
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300"
      >
        <InfoItem icon={<Mail size={18} />} label={user.email} />
        <InfoItem icon={<Phone size={18} />} label={user.phone_number} />
        <InfoItem icon={<MapPin size={18} />} label={user.city} />
        <InfoItem
          icon={<UserCircle2 size={18} />}
          label={`Возраст: ${user.age}`}
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-end">
        <a
          href={`https://wa.me/${user.phone_number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition"
        >
          <MessageCircle size={18} />
          Написать в WhatsApp
        </a>
      </motion.div>
    </motion.div>
  );
};

const InfoItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
    <span className="text-blue-500">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Profile;
