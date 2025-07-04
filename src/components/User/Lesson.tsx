"use client";

import { Progress } from "@/services/progessService";
import { User } from "@/services/userService";
import { fetchCourseById } from "@/services/courseService"; // Предположим, что эта функция существует
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import groupBy from "lodash/groupBy";

type ChartItem = {
  courseId: string;
  courseName: string;
  count: number;
};

const LessonChart = ({
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
      const groupedByCourse = groupBy(userProgress, (item) => item.course_id);
      const entries = Object.entries(groupedByCourse);

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
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md text-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-4">
          {userData?.name} – Прогресс по курсам
        </h2>

        {loading ? (
          <p>Загрузка данных...</p>
        ) : chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="courseName" />
              <YAxis
                allowDecimals={false}
                label={{
                  value: "Завершено раз",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                formatter={(value: number | string) => `${value} завершено`}
                labelFormatter={(label: string) => `Курс: ${label}`}
              />
              <Legend />
              <Bar dataKey="count" fill="#4ade80" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>Нет завершённых курсов для отображения.</p>
        )}
      </div>
    </div>
  );
};

export default LessonChart;
