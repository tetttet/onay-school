"use client";

import { Progress } from "@/services/progessService";
import { User } from "@/services/userService";
import { fetchCourseById } from "@/services/courseService";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import groupBy from "lodash/groupBy";

const COLORS = [
  "#60a5fa",
  "#34d399",
  "#fbbf24",
  "#f87171",
  "#a78bfa",
  "#fb7185",
  "#f472b6",
  "#4ade80",
  "#2dd4bf",
  "#818cf8",
];

type ChartItem = {
  courseId: string;
  courseName: string;
  count: number;
};

const DonutChartByCourse = ({
  userData,
  userProgress,
}: {
  userData: User;
  userProgress: Progress[];
}) => {
  const [chartData, setChartData] = useState<ChartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourseData = async () => {
      const grouped = groupBy(userProgress, (item) => item.course_id);
      const entries = Object.entries(grouped);

      const result: ChartItem[] = await Promise.all(
        entries.map(async ([courseId, items]) => {
          try {
            const course = await fetchCourseById(courseId);
            return {
              courseId,
              courseName: course?.title || "Неизвестный курс",
              count: items.length,
            };
          } catch {
            return {
              courseId,
              courseName: "Ошибка загрузки",
              count: items.length,
            };
          }
        })
      );

      setChartData(result);
      setLoading(false);
    };

    loadCourseData();
  }, [userProgress]);

  return (
    <div className="rounded-xl w-full">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-4">
          {userData?.name} – Доля завершённых курсов
        </h2>

        {loading ? (
          <p>Загрузка данных...</p>
        ) : chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="courseName"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                label
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number | string) => `${value} завершено`}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>Нет данных для отображения.</p>
        )}
      </div>
    </div>
  );
};

export default DonutChartByCourse;
