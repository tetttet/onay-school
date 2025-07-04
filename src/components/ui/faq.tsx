import Link from "next/link";
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      question: "Можно ли пройти пробный урок?",
      answer:
        "Да! У нас есть возможность пройти бесплатный пробный урок для оценки преподавателя и формата обучения.",
    },
    {
      question: "Предоставляете ли вы сертификаты по окончании курсов?",
      answer:
        "Да, после успешного завершения курса выдаётся сертификат Onay School на английском и турецком языках.",
    },
    {
      question: "Какие материалы используются в обучении?",
      answer:
        "Мы используем международные учебные пособия, собственные авторские материалы, платформы (например, Khan Academy, Cambridge, Magoosh) и дополнительные онлайн-ресурсы.",
    },
    {
      question: "Можно ли вернуть деньги, если курс не подошёл?",
      answer:
        "Да, действует политика гарантированного возврата в течение первых 7 дней после старта курса (при соблюдении условий договора).",
    },
    {
      question:
        "Могу ли я подготовиться к программе Work and Travel через вас?",
      answer:
        "Скоро в нашем портфеле появятся курсы и консультации по программе Work and Travel USA — следите за обновлениями!",
    },
  ];

  return (
    <div>
      <section
        className="py-10 bg-gradient-to-b from-white to-blue-100 
      dark:from-[#0a0a0a] dark:to-blue-900
      sm:py-16 lg:py-24"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Часто задаваемые вопросы
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              Здесь вы можете найти ответы на самые популярные вопросы о наших
              курсах, преподавателях и условиях обучения. Если у вас есть другие
              вопросы, не стесняйтесь обращаться к нам!
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {data.map((item, index) => (
              <div
                key={index}
                className="transition-all rounded-xl duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50
                dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="flex text-lg font-semibold text-black dark:text-white">
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>{item.answer}</p>
                    <Link
                      href="https://wa.me/77027472433"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-white font-bold transition-all duration-200 underline"
                    >
                      Узнать больше
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-300 text-base mt-9">
            Не нашли ответ на свой вопрос?{" "}
            <Link
              href="https://wa.me/77027472433"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-white transition-all duration-200 hover:text-blue-700 focus:text-blue-700 underline"
            >
              Напишите нам
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
