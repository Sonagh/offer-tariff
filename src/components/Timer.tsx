"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  onExpire: () => void;
}

const DURATION_SECONDS = 120;
const TIMER_KEY = "offer_timer_end_time";

export default function Timer({ onExpire }: Props) {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if there's a saved end time in localStorage
    const savedEndTime = localStorage.getItem(TIMER_KEY);
    const now = Date.now();

    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const remainingSeconds = Math.max(0, Math.floor((endTime - now) / 1000));

      if (remainingSeconds <= 0) {
        setSeconds(0);
        setIsExpired(true);
        localStorage.removeItem(TIMER_KEY);
        setTimeout(() => onExpire(), 0);
      } else {
        setSeconds(remainingSeconds);
      }
    } else {
      // First time - set the end time
      const endTime = now + DURATION_SECONDS * 1000;
      localStorage.setItem(TIMER_KEY, endTime.toString());
      setSeconds(DURATION_SECONDS);
    }
  }, [onExpire]);

  useEffect(() => {
    if (isExpired || seconds === null) {
      return;
    }

    if (seconds <= 0) {
      setIsExpired(true);
      localStorage.removeItem(TIMER_KEY);
      setTimeout(() => onExpire(), 0);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === null) return null;
        const newSeconds = prev - 1;
        if (newSeconds <= 0) {
          setIsExpired(true);
          localStorage.removeItem(TIMER_KEY);
          setTimeout(() => onExpire(), 0);
          return 0;
        }
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onExpire, isExpired]);

  if (seconds === null) {
    return null;
  }

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const isDanger = seconds <= 30 || isExpired;

  return (
    <div
      className={clsx(
        "flex justify-center items-center overflow-hidden gap-1 text-4xl font-bold transition-all duration-300 overflow-hidden",
        isDanger ? "text-danger animate-pulse scale-110" : "text-secondary",
        isExpired && "animate-none opacity-70 scale-100",
      )}
    >
      <i className="icon-star text-xs" />
      {String(minutes).padStart(2, "0")}
      <i className="icon-dots text-base" />
      {String(secs).padStart(2, "0")}
      <i className="icon-star text-xs" />
    </div>
  );
}
