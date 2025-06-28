"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto w-full">
      <WobbleCard
        src="https://plus.unsplash.com/premium_vector-1721296175362-c52a73ff127b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            IT для начинающих
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Программирование, веб-дизайн, кибербезопасность и многое другое.
            Погрузись в основы программирования, цифровой безопасности и новых
            технологий — начни карьеру в{" "}
            <span className="text-white font-bold">IT</span> с нуля
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800" src="https://plus.unsplash.com/premium_vector-1721307847297-386249d04aa0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Подготовка к учебе за границей
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Подготовка к экзаменам{" "}
          <span className="text-white font-bold">IELTS</span>,{" "}
          <span className="text-white font-bold">SAT</span> и другим
          международным тестам.
          <br />
        </p>
      </WobbleCard>
      <WobbleCard src="https://plus.unsplash.com/premium_vector-1721203683740-d57134f5ff5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" containerClassName="col-span-1 lg:col-span-1 bg-[#118caa] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Иностранные языки
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            <span className="text-white font-bold">Китайский</span>,{" "}
            <span className="text-white font-bold">арабский</span>,{" "}
            <span className="text-white font-bold">английский</span>,{" "}
            <span className="text-white font-bold">турецкий</span> - подготовка
            или совершенствуй уровень языка для учёбы, работы и путешествий по
            всему миру.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard src="https://plus.unsplash.com/premium_vector-1721296174014-8cdae5be292b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" containerClassName="col-span-1 lg:col-span-2 bg-green-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Международные программы
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Сопровождение программ{" "}
            <span className="text-white font-bold">Work and Travel</span> и{" "}
            <span className="text-white font-bold">Türkiye Bursları</span>{" "}
            Поддержка на каждом этапе: поможем с анкетами, документами, интервью
            и адаптацией — уверенно проходи отбор и отправляйся за границу.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
