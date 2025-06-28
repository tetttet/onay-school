import React from 'react';

const CardDemo = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Пакет 1</h2>
          <p className="text-gray-700 mb-4 dark:text-gray-300">Курс для начинающих с базовыми знаниями.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full dark:bg-blue-600">Подробности</button>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Пакет 2</h2>
          <p className="text-gray-700 mb-4 dark:text-gray-300">Продвинутый курс для опытных пользователей.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full dark:bg-blue-600">Подробности</button>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Пакет 3</h2>
          <p className="text-gray-700 mb-4 dark:text-gray-300">Курс с дополнительными материалами и индивидуальными консультациями.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full dark:bg-blue-600">Подробности</button>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
