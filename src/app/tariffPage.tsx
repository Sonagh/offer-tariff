"use client";

import { ITariff } from "@/types/tariff";
import { useState, useEffect } from "react";
import TariffCard from "@/components/TariffCard";
import Header from "@/components/Header";
import offerImg from "@/assets/images/offer.png";
import Image from "next/image";

interface Props {
  tariffs: ITariff[];
}

export default function TariffPage({ tariffs }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(
    tariffs.findIndex((t) => t.is_best) || 0,
  );
  const [expired, setExpired] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showCheckboxError, setShowCheckboxError] = useState(false);

  useEffect(() => {
    const TIMER_KEY = "offer_timer_end_time";
    const savedEndTime = localStorage.getItem(TIMER_KEY);

    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const now = Date.now();

      if (now >= endTime) {
        setTimeout(() => setExpired(true), 0);
        localStorage.removeItem(TIMER_KEY);
      }
    }
  }, []);

  const handleBuyClick = () => {
    if (!isCheckboxChecked) {
      setShowCheckboxError(true);
      return;
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        onExpire={() => {
          setExpired(true);
        }}
      />

      <main className="container mx-auto pb-10">
        <h1 className="title text-2xl md:text-4xl px-3 text-white">
          Выбери подходящий для себя <span className="text-primary">тариф</span>
        </h1>

        <div className="flex items-center gap-17 max-lg:flex-col">
          <div className="img-wrapper">
            <Image
              src={offerImg}
              alt="offer"
              className="object-contain items-center"
            />
          </div>

          <div className="">
            <div className="tariff-wrapper self-start">
              {tariffs.map((tariff, index) => (
                <TariffCard
                  key={`${tariff.id}-${index}`}
                  tariff={tariff}
                  selected={selectedIndex === index}
                  expired={expired}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}

              <p className="grow-0 shrink-0 basis-[calc(66.66%-20px)] py-5 px-4 bg-dark-bg rounded-xs">
                <i className="icon-mark text-primary shrink-0" />
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
                результат, чем за 1 месяц
              </p>
            </div>

            <label className="w-4/5 flex items-center gap-2 cursor-pointer my-3">
              <input
                type="checkbox"
                className="w-4 h-4 checkbox"
                checked={isCheckboxChecked}
                onChange={(e) => {
                  setIsCheckboxChecked(e.target.checked);
                  if (e.target.checked) {
                    setShowCheckboxError(false);
                  }
                }}
              />
              <span
                className={`checkbox-helper ${showCheckboxError ? "error" : ""}`}
              >
                <i className="icon-checkmark" />
              </span>
              <span>
                Я согласен с{" "}
                <a href="#" className="underline">
                  {" "}
                  офертой рекуррентных платежей
                </a>{" "}
                и{" "}
                <a href="#" className="underline">
                  Политикой конфиденциальности
                </a>
              </span>
            </label>

            <button className="btn-primary w-1/2" onClick={handleBuyClick}>
              Купить
            </button>

            <p className="my-3 text-sm">
              Нажимая кнопку «Купить», Пользователь соглашается на разовое
              списание денежных средств для получения пожизненного доступа к
              приложению. Пользователь соглашается, что данные
              кредитной/дебетовой карты будут сохранены для осуществления
              покупок дополнительных услуг сервиса в случае желания
              пользователя.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4 border-1 rounded-sm">
          <span className="self-start p-3 text-success bg-dark-bg rounded-sm border border-success">
            гарантия возврата 30 дней
          </span>
          <p className="text-light">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые
            результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
            деньги в течение 30 дней с момента покупки, если ты не получишь
            видимых результатов.
          </p>
        </div>
      </main>
    </div>
  );
}
