import React from "react";

type Props = {
  secondsLeft: number;
};

export default function TimerDisplay({ secondsLeft }: Props) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return (
    <div>
      <h1 className="text-6xl sm:text-7xl font-bold tabular-nums tracking-tight">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}
