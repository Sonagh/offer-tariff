"use client";

import Timer from "@/components/Timer";

interface Props {
  onExpire: () => void;
}

export default function Header({ onExpire }: Props) {
  return (
    <header className="bg-header text-center p-3 text-white sticky top-0 z-50">
      <p className="text-lg md:text-xl font-semibold">
        Успейте открыть пробную неделю
      </p>
      <Timer onExpire={onExpire} />
    </header>
  );
}
