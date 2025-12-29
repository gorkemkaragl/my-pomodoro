"use client";

import { useEffect, useState } from "react";
import TimerSkeleton from "../common/TimerSkeleton";

type Props = {
  secondsLeft: number;
};

export default function TimerDisplay({ secondsLeft }: Props) {

  //başlangıç değerini localStorage’dan alırken hata oluşmasını önlemek için
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 if (!mounted) {
    return (
      <TimerSkeleton />
    );
  } // SSR’de hiçbir şey render etme 


  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return (
    <div>
      <h1 className="text-7xl sm:text-8xl font-bold tabular-nums tracking-widest text-primary select-none">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}
