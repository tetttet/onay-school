import { User } from "@/services/userService";
import Image from "next/image";

const UserCard = ({ userData }: { userData: User }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md p-8 md:p-10 w-full max-w-lg mx-auto text-gray-900 dark:text-white space-y-8">
      <div className="flex flex-col items-center gap-4">
        {userData?.image_url ? (
          <Image
            priority
            width={112}
            height={112}
            src={userData.image_url}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-md">
            {userData?.name?.charAt(0) || "?"}
          </div>
        )}

        <div className="text-center">
          <h1 className="text-2xl font-bold">Добро пожаловать,</h1>
          <p className="text-xl text-blue-500 dark:text-blue-400 font-semibold">
            {userData?.name || "Гость"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {userData?.role || "Позиция не указана"}
          </p>
        </div>
      </div>

      {/* Информация */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <ul className="space-y-3 text-sm leading-6">
          <li>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Имя пользователя:
            </span>{" "}
            {userData?.username || "N/A"}
          </li>
          <li>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Email:
            </span>{" "}
            {userData?.email || "N/A"}
          </li>
          <li>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Телефон:
            </span>{" "}
            {userData?.phone_number || "Не указан"}
          </li>
          <li>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Возраст:
            </span>{" "}
            {userData?.age || "Не указан"}
          </li>
          <li>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Город:
            </span>{" "}
            {userData?.city || "Не указан"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
