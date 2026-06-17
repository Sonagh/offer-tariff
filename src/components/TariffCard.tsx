"use client";

import { ITariff } from "@/types/tariff";
import { calculateDiscount } from "@/utils/discount";
import clsx from "clsx";

interface Props {
  tariff: ITariff;
  selected: boolean;
  expired: boolean;
  onClick: () => void;
}

export default function TariffCard({
  tariff,
  selected,
  expired,
  onClick,
}: Props) {
  const discount = calculateDiscount(tariff.price, tariff.full_price);

  return (
    <div onClick={onClick} className={clsx("tariff", selected && "selected")}>
      <div
        className={clsx(
          "tariff__discount transition-all duration-500",
          expired && "opacity-0 -translate-y-2",
        )}
      >
        -{discount}%
      </div>
      <div>
        <h3
          className={clsx(
            "tariff__period text-lg font-semibold",
            selected ? "mt-0" : "mt-10",
          )}
        >
          {tariff.period}
        </h3>

        {selected && (
          <span className="absolute top-2 right-6 text-primary font-medium uppercase">
            хит!
          </span>
        )}

        <div className="flex flex-col price-wrap leading-none relative h-20 justify-end pt-2">
          <div className="relative">
            <span
              className={clsx(
                "font-medium text-5xl whitespace-nowrap transition-all duration-700 block",
                selected ? "text-primary" : "",
                expired && "opacity-0 -translate-y-full",
              )}
            >
              {tariff.price} ₽
            </span>

            <span
              className={clsx(
                "absolute top-0 left-0 font-medium text-5xl whitespace-nowrap transition-all duration-700",
                selected ? "text-primary" : "",
                !expired && "opacity-0 translate-y-full",
              )}
            >
              {tariff.full_price} ₽
            </span>
          </div>

          <span
            className={clsx(
              "text-gray text-xl text-right line-through transition-all duration-700",
              expired && "opacity-0 translate-x-10",
            )}
          >
            {tariff.full_price} ₽
          </span>
        </div>
      </div>

      <p className={clsx("tariff__text self-start", !selected && "mt-10")}>
        {tariff.text}
      </p>
    </div>
  );
}
