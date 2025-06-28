"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-[#0a0a0a] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Курс по программированию просто огонь! Наконец-то понял основы JavaScript и даже сделал свой первый сайт. Преподаватель всё объясняет очень доступно.",
    name: "Арман К.",
    title: "Студент курса 'Основы программирования'",
  },
  {
    quote:
      "Благодаря вашему курсу я поднял Writing с 5.5 до 7.0 в IELTS всего за месяц. Практика и обратная связь были невероятно полезными.",
    name: "Aruzhan T.",
    title: "Участница курса 'IELTS Writing'",
  },
  {
    quote:
      "SAT course helped me improve my math section from 600 to 740. The practice tests and detailed solutions were extremely effective.",
    name: "Batyrhan L.",
    title: "High school student from Istanbul",
  },
  {
    quote:
      "Очень крутой курс по китайскому! После трёх месяцев могу уверенно вести диалог на базовом уровне и понимаю простую речь.",
    name: "Айтолкын С.",
    title: "Слушатель курса 'Китайский язык для начинающих'",
  },
  {
    quote:
      "The English speaking club really boosted my confidence. I’m no longer afraid to talk to foreigners or speak at interviews.",
    name: "Aliya K.",
    title: "Graduate, English Communication Skills",
  },
  {
    quote:
      "Программирование всегда казалось мне сложным, но ваш курс сделал это понятным. Я теперь даже подрабатываю на фрилансе!",
    name: "Ерлан М.",
    title: "Выпускник курса 'Frontend для новичков'",
  },
  {
    quote:
      "لقد تعلمت الكثير من دورة اللغة العربية. الأساتذة محترفون والطريقة ممتعة ومفيدة للغاية.",
    name: "Fatima Z.",
    title: "Student of Arabic Language in Yildiz Technical University",
  },
  {
    quote:
      "The SAT verbal prep course was exactly what I needed. The vocabulary tips and reading strategies were game-changers.",
    name: "Murat T.",
    title: "11th Grade Student, SAT Candidate",
  },
  {
    quote:
      "Очень понравилось, как построен курс по IELTS. Много полезных материалов, шаблонов и практики. Особенно крутой раздел Speaking.",
    name: "Нурия Ж.",
    title: "Будущий студент в Турций",
  },
  {
    quote:
      "كورس البرمجة كان ممتعًا جدًا. الآن أفهم كيف تعمل المواقع وأقوم ببناء صفحات بسيطة بنفسي.",
    name: "Omar H.",
    title: "طالب في مسار 'مقدمة في تطوير الويب'",
  },
];
