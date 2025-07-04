"use client";

import { Progress } from "@/services/progessService";
import { User } from "@/services/userService";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import groupBy from "lodash/groupBy";

const Graph = ({
  userData,
  userProgress,
}: {
  userData: User;
  userProgress: Progress[];
}) => {
  // Группируем прогресс по датам завершения
  const groupedData = groupBy(userProgress, (item) =>
    dayjs(item.completed_at).format("YYYY-MM-DD")
  );

  // Преобразуем в массив формата { date: "2025-06-13", count: 2 }
  const chartData = Object.entries(groupedData).map(([date, items]) => ({
    date,
    count: items.length,
  }));

  return (
    <div className="rounded-xl px-6 w-full">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md text-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-4">
          {userData?.name} – Прогресс по датам
        </h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                label={{
                  value: "Кол-во завершённых уроков",
                  angle: -90,
                  position: "insideLeft",
                }}
                allowDecimals={false}
              />
              <Tooltip
                formatter={(value: number | string) => value?.toString()}
                labelFormatter={(label: string) => `Дата: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Нет завершённых уроков для отображения.</p>
        )}
      </div>
    </div>
  );
};

export default Graph;
